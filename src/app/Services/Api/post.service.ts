import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {AppConfigService} from '../Common/app-config-service.service'
import {tokenresponse} from '../Common/interfaces.service'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,private config:AppConfigService) { }

  public PostMethod(token:tokenresponse,body:any,url:string) { 
    let authorizationData = `${token.token_type} ${token.access_token}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData,
        
      }),
      observe: "response" as 'response'
      
    };
    return this.http.post<any>(url,JSON.stringify(body), httpOptions)

    }

    public PostMethodMultipart(token:tokenresponse,body:FormData,url:string) { 
      let authorizationData = `${token.token_type} ${token.access_token}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': authorizationData,
          'enctype': 'multipart/form-data'
        })
      }; 
      return this.http.post<any>(url,body, httpOptions)
  
      }
}
