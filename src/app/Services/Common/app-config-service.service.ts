import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) {}
  
  loadAppConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
    }
  
  
  get UrlToken() {
    return this.appConfig.UrlToken;
  }
  get UrlCharges() {
    return this.appConfig.UrlCharges;
  }
  get UrlInvoice() {
    return this.appConfig.UrlInvoice;
  }
  get UrlUpdate() {
    return this.appConfig.UrlUpdate;
  }
  get UrlLocation() {
    return this.appConfig.UrlLocation;
  }
  get UrlBeneficiary(){
    return this.appConfig.UrlBeneficiary;
  }
  get UrlDiagnosis(){
    return this.appConfig.UrlDiagnosis;
  }
  get UrlAuthorization(){
    return this.appConfig.UrlAuthorization;
  }
  get UrlReceta(){
    return this.appConfig.UrlGetReceta
  }
  get UrlDispensing(){
    return this.appConfig.UrlDispensing
  }
  get UserToken() {
    return this.appConfig.UserToken;
  }
  get UserAuthorization() {
    return localStorage.getItem("UserName");
  }
  get PasswordAuthorization() {
    return localStorage.getItem("Password");
  }
  get plan() {
    return this.appConfig.healthcare_plan_coverage_code;
  }
  get acuerdo() {
    return this.appConfig.agreement_code;
  }
  get provider_slug(){
    return this.Permissions.find((x:any)=>x.client=localStorage.getItem("UserName")).provider_slug;
  }
  get sponsor_slug(){
    return this.appConfig.sponsor_slug;
  }
  get Permissions(){
    return this.appConfig.permissions;
  }

}