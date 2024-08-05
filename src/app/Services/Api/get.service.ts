import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {AppConfigService} from '../Common/app-config-service.service'
import {tokenresponse} from '../Common/interfaces.service'

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient,private config:AppConfigService) { }

  public GetMethod(token:tokenresponse,name:string,value:string,url:string) { 
    let authorizationData = `${token.token_type} ${token.access_token}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData,
        
      }),
      observe: "response" as 'response',
     params:new HttpParams().set(name,value)
      
    };
    return this.http.get<any>(url, httpOptions)

    }

    public GetMethodsimple(token:tokenresponse,url:string) { 
      let authorizationData = `${token.token_type} ${token.access_token}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': authorizationData,
          
        }),
        observe: "response" as 'response'
      };
      return this.http.get<any>(url, httpOptions)
  
      }
}
