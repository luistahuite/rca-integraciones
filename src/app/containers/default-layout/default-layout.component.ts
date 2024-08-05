import { Component } from '@angular/core';
import {} from 'src/app/Services/Common/app-config-service.service'
import { AppConfigService } from "src/app/Services/Common/app-config-service.service";

import { navItems } from './_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

 perm=this.AppConfig.Permissions.find((x:any)=>x.client===localStorage.getItem("UserName"));
  public navItems = navItems(this.perm); 


  constructor(private router:Router,private AppConfig:AppConfigService) {
    if(!localStorage.getItem("UserName")){
      this.router.navigate(['/settings'])
    }
  }
}
