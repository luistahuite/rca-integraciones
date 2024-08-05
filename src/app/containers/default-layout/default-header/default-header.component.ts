import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

localname=''
  constructor(private classToggler: ClassToggleService,private router: Router) {
    
    super();
    var lsuser=localStorage.getItem("UserName")
    if(lsuser!==null){
    this.localname=lsuser
    this.router.navigate(['/']);
    }else{
      this.router.navigate(['/settings']);
    }
  }
}
