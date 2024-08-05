import { Pipe, PipeTransform } from '@angular/core';
import {serviceTypes} from 'src/app/Services/Common/lists.service'
@Pipe({name: 'filterInvoice'})
export class FilterByStatusPipe implements PipeTransform {

    transform(ChargerList : any, inv: string){
        var services:string[]=[]
        serviceTypes.filter(y=>y.Document===true).forEach(ele=>{
            services.push(ele.Code);
        })
        serviceTypes.filter(y=>y.Document===true)
        if (ChargerList) {
            return ChargerList.filter((char: any) => char.Invoice === inv && services.includes(char.service_type_code));
        }
    }
}