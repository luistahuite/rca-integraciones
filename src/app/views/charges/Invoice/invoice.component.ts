import { Component, OnInit } from '@angular/core';
import{DatabaseService} from '../../../DataBase/Services/database.service'
import{chargerTableinv, invoice,documents, document}from '../../../Services/Common/interfaces.service'
import { TokenService} from "../../../Services/Security/token.service";
import { AppConfigService} from "../../../Services/Common/app-config-service.service";
import {tokenresponse,assigncharges} from '../../../Services/Common/interfaces.service'
import {PostService} from '../../../Services/Api/post.service'
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';




@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})


export class InvoiceComponent implements OnInit{

  public Attention:string=''
  public responsecharger:invoice={} as invoice; 
  public query = this.DataBase.db.charges.find();
  public visible = false;
  public assigned={} as assigncharges
  buttonview=false;

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
  
  constructor(private DataBase:DatabaseService,private Token:TokenService,private AppConfig:AppConfigService,private post:PostService,private router:Router) {
  }

  
  FindAttention(){
   this.query = this.DataBase.db.charges
    .find({
      selector: {
        Origin_id: {
          $eq: this.Attention
        }
      }
    });
if(this.Attention.trim()!==''){
  this.responsecharger={} as invoice; 
  this.visible = false;
  this.assigned={} as assigncharges
    this.query.$.subscribe(resp=>{
      try{
      this.responsecharger=<invoice>(resp[0]);
      if(!this.responsecharger?.Charge){
        alert("No se encontraron registros para el número de ingreso "+this.Attention)
        this.responsecharger={} as invoice; 
    this.visible = false;
    this.assigned={} as assigncharges
    this.Attention='';
    this.buttonview=false;
      }else{
        this.buttonview=true;
      }
      }catch{
        alert("No se encontraron registros para el número de ingreso "+this.Attention)
        this.responsecharger={} as invoice; 
    this.visible = false;
    this.assigned={} as assigncharges
    this.Attention='';
    this.buttonview=false;
      }
    })
  }else{
    this.responsecharger={} as invoice; 
    this.visible = false;
    this.assigned={} as assigncharges
    this.Attention='';
    this.buttonview=false;
    alert("El número de Ingreso es obligatorio")
  }

}

InvoiceSelect(){
  this.assigned={} as assigncharges
var invo=Math.floor(Math.random()*(99999-1 - 0 + 1) + 0 )
var chargesselect=[] as string[]
  this.responsecharger.Charge.filter(x=>x.invoiced==true&& x.Invoice=='').forEach(item=>{
    item.Invoice=invo.toString();
    chargesselect.push(item.code);
  })
  this.assigned.agreement_code=this.AppConfig.acuerdo;
  this.assigned.invoice_number=invo.toString();
  this.assigned.charge_codes=chargesselect;

this.Token.getToken().subscribe(tok=>{
  this.post.PostMethod(<tokenresponse>tok,this.assigned,this.AppConfig.UrlInvoice).subscribe(resp=>{

    var loc=resp.headers.get("Location")?.split('/')
var localice=loc?.reverse()[0]


    this.query.update({
      $set:{
        Charge:this.responsecharger.Charge
      }
    })
var tableinv=this.responsecharger.Charge.filter(x=>x.Invoice===invo.toString())

var docs={} as documents
docs.Fact={
  Doc:{} as File,
  Document:false
}

docs.Deta={
  Doc:{} as File,
  Document:false
}

docs.Epic={
  Doc:{} as File,
  Document:false
}

docs.Hc={
  Doc:{} as File,
  Document:false
}

    this.DataBase.db.invoices.insert({
      id:Guid.create().toString(),
      Invoice:invo.toString(),
      Origin_id:this.Attention,
      Documents:docs,
      Charge:tableinv
  })
  this.DataBase.db.invoices.find().$.subscribe(res=>{
    console.log(res)
  })

    this.toggleLiveDemo()
    
  })
})
}

toggleLiveDemo() {
  this.visible = !this.visible;
}

handleLiveDemoChange(event: any) {
  this.visible = event;
}
}
