import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})


export class SettingsComponent {
  username=''
  password=''
constructor(private router: Router){}
  SetLocalStorage(){
    if(this.username!=='' && this.password!==''){
      localStorage.setItem("UserName",this.username);
      localStorage.setItem("Password",this.password)
      window.location.reload();
    }
  }

}
