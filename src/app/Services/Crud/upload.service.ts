import { Injectable } from '@angular/core';
import { invoice, tokenresponse, uploadData } from '../Common/interfaces.service';
import { Guid } from 'guid-typescript';
import { DatabaseService } from 'src/app/DataBase/Services/database.service';
import { AppConfigService } from '../Common/app-config-service.service';
import { TokenService } from '../Security/token.service';
import { PostService } from '../Api/post.service';
import { RxQuery } from 'rxdb';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private DataBase: DatabaseService, private Token: TokenService, private AppConfig: AppConfigService, private post: PostService) { }


  uploadHeader(Invoice: invoice, type: string,File:File) {
    var dataservice = {} as uploadData;
    var totalmount = 0;
    var chargeslist = [] as string[];
    Invoice.Charge.forEach(item => {
      totalmount += item.total_amount;
      chargeslist.push(item.code);
    })

    dataservice.support_file_code = type,
      dataservice.events = [
        {
          origin_event_id: Invoice.Origin_id,
          charge_codes: chargeslist
        }
      ];
    dataservice.NOauthorization_id = '1',
    dataservice.NOauthorized_by = 'dmarenco@osigu.com'
    dataservice.support_file_metadata = {
      invoice_number: Invoice.Invoice,
      invoice_amount: totalmount.toString(),
      invoice_date_time: new Date(Invoice.Charge[0].creation_date_time),
      invoice_electronic_code: Guid.create().toString()
    }

    this.Token.getToken().subscribe(tok => {
      let fd = new FormData();
      fd.append("request_data", new Blob([JSON.stringify(dataservice)], { type: 'application/json' }), File.name)
      fd.append("file", new Blob([File], { type: File.type }), File.name)
      this.post.PostMethodMultipart(<tokenresponse>tok, fd, this.AppConfig.UrlUpdate).subscribe(resp => {


        switch (type) {
          case 'FACT':
            Invoice.Documents.Fact.Document = true;
            break;
          case 'HC':
            Invoice.Documents.Hc.Document = true;
            break;
          case 'DETA':
            Invoice.Documents.Deta.Document = true;
            break;
          case 'EPIC':
            Invoice.Documents.Epic.Document = true;
            break;
        }
      })
    })

  }



  uploadCharge(Invoice: invoice, type: string,File:File,code:string) {
    var dataservice = {} as uploadData;
var findcharge=Invoice.Charge.find(x=>x.code===code)
var total='0' as string;
if(findcharge?.total_amount){
total=findcharge?.total_amount.toString()
}
    dataservice.support_file_code = type,
      dataservice.events = [
        {
          origin_event_id: Invoice.Origin_id,
          charge_codes: [code]
        }
      ];
    dataservice.NOauthorization_id = '1',
    dataservice.NOauthorized_by = 'dmarenco@osigu.com'
    dataservice.support_file_metadata = {
      invoice_number: Invoice.Invoice,
      invoice_amount: total,
      invoice_date_time: new Date(Invoice.Charge[0].creation_date_time),
      invoice_electronic_code: Guid.create().toString()
    }

    this.Token.getToken().subscribe(tok => {
      let fd = new FormData();
      fd.append("request_data", new Blob([JSON.stringify(dataservice)], { type: 'application/json' }), File.name)
      fd.append("file", new Blob([File], { type: File.type }), File.name)
      this.post.PostMethodMultipart(<tokenresponse>tok, fd, this.AppConfig.UrlUpdate).subscribe(resp => {
      })
    })

  }



}
