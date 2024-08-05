import { Component } from '@angular/core';
import { GetService } from 'src/app/Services/Api/get.service';
import { PostService } from 'src/app/Services/Api/post.service';
import { AppConfigService } from 'src/app/Services/Common/app-config-service.service';
import { tokenresponse,dispensedrug,dispensations,products } from 'src/app/Services/Common/interfaces.service';
import { TokenService } from 'src/app/Services/Security/token.service';

@Component({
  selector: 'app-dispensacion',
  templateUrl: './dispensacion.component.html',
  styleUrl: './dispensacion.component.scss'
})
export class DispensacionComponent {
code=''
dispenser =[] as any
buttonview=false;
buttonfact=false;
dispenserlist=[] as dispensedrug[]
authpend={} as any
numberfact=''
constructor(private Token:TokenService,private get:GetService,private AppConfig:AppConfigService,private post:PostService){}
GetDrugs(){
  this.buttonview=false;
  this.buttonfact=false;
  this.Token.getToken().subscribe(
    (data:any) => {

      const urlcomplete=`${this.AppConfig.UrlReceta}${this.code}`

      this.get.GetMethodsimple(<tokenresponse>data,urlcomplete).subscribe((dat:any) => {
        console.log(dat.body)
        this.dispenser=[];
        this.dispenser=dat.body
          this.dispenser.approved_products.forEach((item:any) => {
            var drug={} as dispensedrug
            drug.id=item.id
            drug.code=item.code
            drug.name=item.name
            drug.quantity=item.quantity
            drug.full=item.quantity
            drug.price="0"
            drug.selected=false
            this.dispenserlist.push(drug)
          });
        },error=>{

          console.log(error.error.message)
          alert(error.error.message)
        })
        this.buttonview=true;
  
      })

}
  Dispense(){
    
    this.authpend={}
    this.Token.getToken().subscribe(
      (data:any) => {
        var dispe={} as dispensations
        dispe.currency_code="GTQ"
        dispe.products=[] as products[]
        this.dispenserlist.forEach(disp=>{
          if(disp.selected){
            if(disp.quantity<=0){
              alert("La cantidad debe ser mayor que 0")
            }
            if(+disp.price<=0){
              alert("El precio debe ser mayor que 0")
            }
          var prod={} as products
          prod.id=disp.id
          prod.price=+disp.price
          prod.product_code=disp.code
          prod.taxes=0.00
          prod.quantity=disp.quantity
          dispe.products.push(prod)
          }

        })
        var urldispen=`${this.AppConfig.UrlReceta}${this.code}/dispensations`
      this.post.PostMethod(<tokenresponse>data,dispe,urldispen).subscribe(
        dat=>{
          const Location = dat.headers.get("Location")?.trim()
          if (Location)
            this.get.GetMethodsimple(<tokenresponse>data,Location).subscribe(
              (Loc:any) => {
                alert("Predespacho exitoso continúe en la pestaña facturación")
                this.buttonfact=true
              this.authpend=Loc.body
              },error=>{
                alert(error.error.message)
              })

        },error=>{
             alert(error.error.message)   
        }
      )
      })  
  }
  Facture(){


    if(this.numberfact){
      if(this.numberfact!==''){
        this.Token.getToken().subscribe(
          (data:any) => {
            var req={
              "amount":this.authpend.amount_covered_by_sponsor,
              "provider_transaction_id":this.numberfact,
              "document_date":new Date(),
              "document_number":this.numberfact
            } as any

            var urltranf=`${this.AppConfig.UrlDispensing}${this.authpend.id}/complete`
            this.post.PostMethod(<tokenresponse>data,req,urltranf).subscribe(
              dat=>{
                console.log(dat.body)
                alert("Transaccion exitosa, se procesado el reclamo con exito.")
                window.location.reload();
              },error=>{
                alert(error.error.message)
              }
            )
          })


      }
    }

  }
}
