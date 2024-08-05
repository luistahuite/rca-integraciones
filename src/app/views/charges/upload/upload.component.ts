import { Component, OnInit } from '@angular/core';
import { invoice, chargerTableinv, UPloadFiles } from 'src/app/Services/Common/interfaces.service';
import { DatabaseService } from '../../../DataBase/Services/database.service'
import { TokenService } from 'src/app/Services/Security/token.service';
import { FilterServicesPipe } from "src/app/Pipes/FilterservicesPipe";
import { UploadService } from "src/app/Services/Crud/upload.service";
import { AppConfigService } from 'src/app/Services/Common/app-config-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})



export class UploadComponent implements OnInit {
  
  ngOnInit(): void {
    if(localStorage.getItem("UserName")){
      if(!this.AppConfig.Permissions.find((x:any)=>x.client=localStorage.getItem("UserName")))
      {
        this.router.navigate(['/settings'])
      }
    }else{
      this.router.navigate(['/settings'])
    }

  }
  
  constructor(private DataBase: DatabaseService, private Token: TokenService, private filter: FilterServicesPipe, private upload: UploadService,private AppConfig:AppConfigService,private router:Router )
   { 
   }

  public Invoice = '';
  public responsecharger: invoice = {} as invoice;
  public files: UPloadFiles[] = [] as UPloadFiles[]
  buttonview=false;
  public query = this.DataBase.db.invoices.find({
    selector: {
      Invoice: {
        $eq: this.Invoice
      }
    }
  });


  FindAttention() {
    this.query = this.DataBase.db.invoices.find({
      selector: {
        Invoice: {
          $eq: this.Invoice
        }
      }
    });
    if(this.Invoice.trim()!==''){
    this.query.$.subscribe(resp => {
      try{
        this.responsecharger= {} as invoice;
        this.files= [] as UPloadFiles[]
      this.responsecharger = <invoice>(resp[0]._data);
      if(!this.responsecharger?.Charge){
        alert("No se encontraron registros para la factura "+this.Invoice)
        this.Invoice='';
        this.responsecharger= {} as invoice;
        this.files= [] as UPloadFiles[]
        this.buttonview=false;
      }else{
        this.buttonview=true;
      }
      }catch{
        alert("No se encontraron registros para la factura "+this.Invoice)
        this.Invoice='';
        this.responsecharger= {} as invoice;
        this.files= [] as UPloadFiles[]
        this.buttonview=false;
      }
    })
  }else{
    this.Invoice='';
    this.responsecharger= {} as invoice;
    this.files= [] as UPloadFiles[]
    this.buttonview=false;
    alert("El número de factura es obligatorio")
  }

  }


  UploadDocs() {
    console.log(this.responsecharger)
    this.files.forEach(file => {
      this.upload.uploadCharge(this.responsecharger, file.type, file.file, file.charger)
      var esto = this.responsecharger.Charge.forEach(it => {
        if (it.code == file.charger) {
          it.DocumentType.forEach(dt => {
            if (dt.CodSupport == file.type) {
              dt.Document = true
            }
          })
        }
      })
    })
    this.query.update({
      $set: {
        Charge: this.responsecharger.Charge
      }
    })
  }


  changefileinvoice(event: any) {
    const files = event.target.files[0];
    this.responsecharger.Documents.Fact.Doc = files
  }
  changefileepic(event: any) {
    const files = event.target.files[0];
    this.responsecharger.Documents.Epic.Doc = files
  }
  changefilehc(event: any) {
    const files = event.target.files[0];
    this.responsecharger.Documents.Hc.Doc = files
  }
  changefiledeta(event: any) {
    const files = event.target.files[0];
    this.responsecharger.Documents.Deta.Doc = files
  }

  changefilecharger(event: any, code: string, type: string) {
    var fileinternal = {} as UPloadFiles
    fileinternal.file = event.target.files[0]
    fileinternal.charger = code;
    fileinternal.type = type;
    this.files.push(fileinternal)
  }

  UploadHeader() {
    if (this.responsecharger.Documents.Fact.Doc!) {
      this.upload.uploadHeader(this.responsecharger, 'FACT', this.responsecharger.Documents.Fact.Doc)
      this.responsecharger.Documents.Fact.Document = true;
    }
    if (this.responsecharger.Documents.Deta.Doc!) {
      this.upload.uploadHeader(this.responsecharger, 'DETA', this.responsecharger.Documents.Deta.Doc)
      this.responsecharger.Documents.Deta.Document = true;
    }
    if (this.responsecharger.Documents.Hc.Doc!) {
      this.upload.uploadHeader(this.responsecharger, 'HC', this.responsecharger.Documents.Hc.Doc)
      this.responsecharger.Documents.Hc.Document = true;
    }
    if (this.responsecharger.Documents.Epic.Doc!) {
      this.upload.uploadHeader(this.responsecharger, 'EPIC', this.responsecharger.Documents.Epic.Doc)
      this.responsecharger.Documents.Epic.Document = true;
    }

    this.query.update({
      $set: {
        Documents: this.responsecharger.Documents
      }
    })
  }


  ValidateReady(): boolean {
    var ready = this.filter.transform(this.responsecharger.Charge, '1') as chargerTableinv[];
    var valida = true;
    // ready.forEach(item => {
    //   if(item.Document==false){
    //     valida=false;
    //   }
    // });
    // if(this.responsecharger.Document==false){
    //   valida=false;
    // }

    return valida;
  }
}
