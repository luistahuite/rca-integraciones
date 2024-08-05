import { Component, ElementRef, OnInit } from '@angular/core';
import { TokenService } from "src/app/Services/Security/token.service";
import { PostService } from '../../../Services/Api/post.service'
import { GetService } from '../../../Services/Api/get.service'
import { AppConfigService } from "src/app/Services/Common/app-config-service.service";
import {
  tokenresponse, beneficiary,
  beneficiaryresponse, inputs, contentbeneficiary, diagnosis, contentdx,
  medico, medicamentos, authorization, diagnoses, treatment, treatmentinternal, frequenciesinternal
} from "src/app/Services/Common/interfaces.service";
import { TransformService } from "src/app/Services/Common/transform.service";
import { Router } from '@angular/router';


declare const PreAuthorizationWidget: any;

@Component({
  selector: 'app-preauthorization',
  templateUrl: './Preautorizacion.component.html',
  styleUrl: './Preautorizacion.component.scss'
})
export class PreautorizacionComponent implements OnInit {

  ngOnInit(): void {

    if(localStorage.getItem("UserName")){
      if(!this.AppConfig.Permissions.find((x:any)=>x.client=localStorage.getItem("UserName")))
      {
        this.router.navigate(['/settings'])
      }
    }else{
      this.router.navigate(['/settings'])
    }

    PreAuthorizationWidget.createWidget({
      containerId: 'pre-authorization-widget-container-no1',
      clientId: localStorage.getItem("UserName"),
      externalTransactionId: 'ABC123',
      clientSecret: localStorage.getItem("Password"),
      sponsorSlug: this.AppConfig.sponsor_slug,
      countryCode: 'GT',
      showDiagnosesForm: false,
      generateAuthorization: false,
      productTypeSlugs: ['drug'],
      providerSlugs: [this.AppConfig.provider_slug],
      primaryColor: '#267535',
      errorColor: '#ee6f6f',
    });

    var elem = this.elementRef.nativeElement.querySelector('#pre-authorization-widget-container-no1');
    if (elem) {
      elem.addEventListener('onPreauthorizationItemAdded', (e: any) => {
        console.log(e.detail)
        this.medicamentos.push(<medicamentos>e.detail)
      })
    }
  }

  poliza = '' as string
  certificado = '';
  buttonview = false;
  beneficiaryList = {} as beneficiaryresponse
  dxfilterlist = {} as diagnosis
  dxList = [] as contentdx[]
  selectedpatient = {} as contentbeneficiary
  med = {} as medico
  HighlightRow: Number = 99999;
  dxpatient = ''
  dxfilter = ''
  carnet = {} as File
  formulario = {} as File
  receta = {} as File
  public visible = false;
  medicamentos = [] as medicamentos[]


  constructor(private transform: TransformService, private Token: TokenService, private post: PostService, private get: GetService, private AppConfig: AppConfigService, private elementRef: ElementRef,private router:Router) {
   
  }
  toggleLiveDemo(id: string) {
    this.visible = !this.visible;
  }

  FindData() {
    if (this.poliza && this.certificado) {

      const benefi = {} as beneficiary;
      this.Token.getToken().subscribe(
        (data:any) => {
          benefi.form_slug = "plan_code_and_certificate"
          benefi.provider_slug = this.AppConfig.provider_slug;
          benefi.inputs = [] as inputs[];
          benefi.inputs.push({
            slug: "plan_code",
            value: this.poliza
          },
            {
              slug: "certificate",
              value: this.certificado
            })
          this.post.PostMethod(<tokenresponse>data, benefi, this.AppConfig.UrlBeneficiary).subscribe((dat:any) => {
            this.beneficiaryList = <beneficiaryresponse>dat.body
            this.buttonview = !this.buttonview
          })
        }
      )
    } else {
      alert("ingrese datos obligatorios")
    }
  }

  selected(id: contentbeneficiary, index: Number) {
    this.dxpatient = ''
    this.dxfilter = ''
    this.med = {} as medico
    this.medicamentos = [] as medicamentos[]
    this.dxList = [] as contentdx[]
    this.HighlightRow = index;
    this.selectedpatient = id
    this.dxpatient = id.name
  }
  selecteddx(id: contentdx) {
    this.toggleLiveDemo(id.diagnosis_id)
    this.dxList.push(id)
    this.dxfilterlist = {} as diagnosis
    this.dxfilter = ''
  }
  FindDx() {
    this.dxfilterlist = {} as diagnosis
    this.Token.getToken().subscribe(
      (data:any) => {
        this.get.GetMethod(<tokenresponse>data, 'name', this.dxfilter, this.AppConfig.UrlDiagnosis).subscribe((dat:any) => {
          this.dxfilterlist = <diagnosis>dat.body
        })
      })
  }


  changefilecarnet(event: any) {
    const files = event.target.files[0];
    this.carnet = files
  }
  changefileform(event: any) {
    const files = event.target.files[0];
    this.formulario = files
  }
  changefilereceta(event: any) {
    const files = event.target.files[0];
    this.receta = files
  }

  validatewidget(): boolean {
    if (this.HighlightRow == 99999) {
      return false
    } if (this.dxList.length == 0) {
      return false;

    }
    if (this.carnet !== undefined && this.formulario !== undefined && this.receta !== undefined) {
      if (this.carnet.name == '' || this.formulario.name == '' || this.receta.name == '' || this.carnet.name == undefined || this.formulario.name == undefined || this.receta.name == undefined) {
        return false;
      }
      if (this.med.nombre == '' || this.med.colegiado == '' || this.med.especialidad == '' || this.med.nombre == undefined || this.med.colegiado == undefined || this.med.especialidad == undefined) {
        return false;
      }
    } else {
      return false
    }
    return true
  }

  Authorice() {
    var error=false
    this.Token.getToken().subscribe(
      (data:any) => {
        this.post.PostMethod(<tokenresponse>data, this.transform.CreateAuthorization(this.selectedpatient, this.dxList, this.med, this.medicamentos), this.AppConfig.UrlAuthorization).subscribe((dat:any) => {
          const Location = dat.headers.get("Location")?.trim()
          if (Location)
            this.get.GetMethodsimple(<tokenresponse>data,Location).subscribe(
              (Loc:any) => {
                const resp=<any>Loc.body
           if(resp.authorizations){
                resp.authorizations.forEach((auth: any) => {
                  auth.products.forEach((prod:any) => {
                    if(prod.status==='REJECTED'){
                      alert(prod.reason)
                      error=true
                    }
                  });
                });
              }else{
                error=true
                alert(resp.reason)
              }
                if(!error){
                  var urlcarnet=`${this.AppConfig.UrlAuthorization}${resp.id}/files?coverage=PRESCRIPTION_DRUGS
                  &product_type=drug&document_type_slug=gt-member-card-front&authorization_id=${resp.authorizations[0].id}`
                  var urlformulario=`${this.AppConfig.UrlAuthorization}${resp.id}/files?coverage=PRESCRIPTION_DRUGS
                  &product_type=drug&document_type_slug=sponsor-authorization&authorization_id=${resp.authorizations[0].id}`
                  var urlreceta=`${this.AppConfig.UrlAuthorization}${resp.id}/files?coverage=PRESCRIPTION_DRUGS
                  &product_type=drug&document_type_slug=gt-prescription&authorization_id=${resp.authorizations[0].id}`
                  let fd = new FormData();
                      fd.append("file", new Blob([this.carnet], { type: this.carnet.type }), this.carnet.name)
                  this.post.PostMethodMultipart(<tokenresponse>data,fd,urlcarnet).subscribe(
                    (car:any)=>{
                        fd = new FormData();
                        fd.append("file", new Blob([this.formulario], { type: this.formulario.type }), this.formulario.name)
                      this.post.PostMethodMultipart(<tokenresponse>data,fd,urlformulario).subscribe(
                        (form:any)=>{
                          fd = new FormData();
                          fd.append("file", new Blob([this.receta], { type: this.receta.type }), this.receta.name)
                        this.post.PostMethodMultipart(<tokenresponse>data,fd,urlreceta).subscribe(
                          (rece:any)=>{
                            var urlcomplete=`${this.AppConfig.UrlAuthorization}${resp.id}/complete`
                            this.post.PostMethod(<tokenresponse>data,'',urlcomplete).subscribe((fin:any)=>{
                              alert(`Se ha creado el codigo de Preautorizacion :${resp.authorizations[0].code}`)
                              window.location.reload();

                            })
                          }
                        )
                          
                        }
                      )

                    }
                  )
                }
              }
            )
        },error=>{
          alert(error.error.message)
        })
      })
      return null;
  }


}
