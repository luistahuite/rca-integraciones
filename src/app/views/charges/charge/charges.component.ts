import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../Services/Security/token.service'
import {PostService} from '../../../Services/Api/post.service'
import {tokenresponse,chargerTable,header, patient, chargerTableinv, chargerConsume, documentType} from '../../../Services/Common/interfaces.service'
import {LoadDataService} from '../../../Services/Common/load-data.service'
import {DatabaseService} from '../../../DataBase/Services/database.service'
import { Guid } from 'guid-typescript';
import {  AppConfigService} from "../../../Services/Common/app-config-service.service";
import { Router } from '@angular/router';




@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrl: './charges.component.scss'
})

export class ChargesComponent implements OnInit {
public Attention:string=''
public Header={} as header
public tabledata=[] as chargerTable[]
buttonview=false;

  constructor(private Token: TokenService,private loadData:LoadDataService,private post:PostService,private dataBase:DatabaseService,private AppConfig:AppConfigService,private router:Router) 
  {
    
  }
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

  
   FindData(){
  if(this.Attention.trim()!==''){
      this.Header={} as header
      this.tabledata=[] as chargerTable[]
  this.Header=this.loadData.loadHeader()
  this.Header.origin=this.Attention
  this.tabledata=this.loadData.LoadTable(this.Header);
  this.buttonview=true;
  }else{
    alert("El número de Ingreso es obligatorio")
    this.Attention=''
      this.Header={} as header
      this.tabledata=[] as chargerTable[]
    this.buttonview=false;
  }
}
LoadData(){

 var tabledataaux=[] as chargerTableinv[]
 var consume={} as chargerConsume
  this.Token.getToken().subscribe(
    data=>
    {
      this.tabledata.forEach(item => {
        
       consume=this.loadData.convertobjectConsume(item);
        this.post.PostMethod(<tokenresponse>data,consume,this.AppConfig.UrlCharges).subscribe(dat=>{
          
          item.id=dat.body.id;
          tabledataaux.push(this.loadData.convertobject(item))
          console.log(dat)
        
        })
      });

            this.dataBase.db.charges.insert({
              id:Guid.create().toString(),
            Origin_id:this.Attention,
            Charge:tabledataaux
          }).then(save=>{
            console.log("guardando datos en db: ");
            console.log(save);

          })
      this.Attention=''
      this.Header={} as header
      this.tabledata=[] as chargerTable[]
    }
    )



}

}
