import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {AppConfigService} from '../Common/app-config-service.service'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(private http: HttpClient,private config:AppConfigService) { }
  
  public getToken() { 
    let authorizationData = 'Basic ' + btoa(this.config.UserAuthorization + ':' + this.config.PasswordAuthorization);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData
      }),params:new HttpParams().set("grant_type",this.config.UserToken)
    };
    return this.http.post(this.config.UrlToken,null, httpOptions)

    }    
  } 
 

  


  
