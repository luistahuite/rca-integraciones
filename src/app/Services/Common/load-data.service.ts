import { Injectable } from '@angular/core';
import { header,chargerTable, chargerTableinv, chargerConsume, documentType } from './interfaces.service';
import { AppConfigService } from './app-config-service.service';
import { patients,attetions,serviceTypes } from './lists.service';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  constructor(private appconfig:AppConfigService) { 

  }

public loadHeader():header{
  let aux={} as header
  aux.patient=patients[Math.floor(Math.random()*(patients.length-1 - 0 + 1) + 0)]
  aux.AttentionName=(attetions[Math.floor(Math.random()*(attetions.length-1 - 0 + 1) + 0 )]) + aux.patient.PatientName
  aux.origin='0';
    return aux;
  }

  public LoadTable(Header:header):chargerTable[]{
    let table=[] as chargerTable[]

    var total=Math.floor(Math.random()*(5-1 - 1 + 1) + 1)
    for (let index = 0; index < total; index++) {
      let tab={} as chargerTable;
      let service=serviceTypes[Math.floor(Math.random()*(serviceTypes.length-1 - 0 + 1) + 0 )]
      let subservice=service.Service[Math.floor(Math.random()*(service.Service.length-1 - 0 + 1) + 0 )]
      let quantity=Math.floor(Math.random()*(5-1 - 1 + 1) + 1 )
      tab.origin_event_id=Header.origin;
      tab.origin_event_description=Header.AttentionName
      tab.code=Math.floor(Math.random()*(9999999-1 - 1 + 1) + 1 ).toString();
      tab.agreement_code=this.appconfig.acuerdo;
      tab.service_type=service.Type;
      tab.service_type_code=service.Code;
      tab.patient_id=Header.patient.IdPatient;
      tab.patient_name=Header.patient.PatientName;
      tab.patient_document_type=Header.patient.TypeId;
      tab.patient_document_number=Header.patient.Id;
      tab.invoiceable=true;
      tab.healthcare_plan_coverage_code=this.appconfig.plan;
      tab.quantity=quantity;
      tab.provider_branch_code="01"
      tab.provider_product_code=subservice.ServiceCode;
      tab.description=subservice.ServiceDesc;
      tab.amount=subservice.ServicePrice;
      tab.total_amount=subservice.ServicePrice*quantity;
      tab.currency=subservice.ServiceCurrency;
      tab.authorization_id="";
      tab.diagnostic_test_number="60507";
      tab.diagnosis_code="Z00";
      tab.diagnosis_name="DOLOR DE ESTOMAGO";
      tab.manually_created=false,
      tab.creation_date_time=new Date()
      tab.DocumentType=subservice.Documents
table.push(tab);
  
    }
    return table;
  }

  public convertobject(tab:chargerTable):chargerTableinv{
        let table={}as chargerTableinv;
        table.id=tab.id;
        table.origin_event_id=tab.origin_event_id;
        table.origin_event_description=tab.origin_event_description;
        table.code=tab.code;
        table.agreement_code=tab.agreement_code;
        table.service_type=tab.service_type;
        table.service_type_code=tab.service_type_code;
        table.patient_id=tab.patient_id;
        table.patient_name=tab.patient_name;
        table.patient_document_type=tab.patient_document_type;
        table.patient_document_number=tab.patient_document_number;
        table.invoiceable=tab.invoiceable;
        table.healthcare_plan_coverage_code=tab.healthcare_plan_coverage_code;
        table.quantity=tab.quantity;
        table.provider_branch_code=tab.provider_branch_code;
        table.provider_product_code=tab.provider_product_code;
        table.description=tab.description;
        table.amount=tab.amount;
        table.total_amount=tab.total_amount;
        table.currency=tab.currency;
        table.authorization_id=tab.authorization_id;
        table.diagnostic_test_number=tab.diagnostic_test_number;
        table.diagnosis_code=tab.diagnosis_code;
        table.diagnosis_name=tab.diagnosis_name;
        table.manually_created=tab.manually_created;
        table.creation_date_time=tab.creation_date_time.toISOString();
        table.invoiced=false;
        table.Invoice='';
        table.DocumentType=tab.DocumentType
        return table;
  }

  public convertobjectConsume(tab:chargerTable):chargerConsume{
    let table={}as chargerConsume;
    table.origin_event_id=tab.origin_event_id;
    table.origin_event_description=tab.origin_event_description;
    table.code=tab.code;
    table.agreement_code=tab.agreement_code;
    table.service_type_code=tab.service_type_code;
    table.patient_id=tab.patient_id;
    table.patient_name=tab.patient_name;
    table.patient_document_type=tab.patient_document_type;
    table.patient_document_number=tab.patient_document_number;
    table.invoiceable=tab.invoiceable;
    table.healthcare_plan_coverage_code=tab.healthcare_plan_coverage_code;
    table.quantity=tab.quantity;
    table.provider_branch_code=tab.provider_branch_code;
    table.provider_product_code=tab.provider_product_code;
    table.description=tab.description;
    table.amount=tab.amount;
    table.total_amount=tab.total_amount;
    table.currency=tab.currency;
    table.authorization_id=tab.authorization_id;
    table.diagnostic_test_number=tab.diagnostic_test_number;
    table.diagnosis_code=tab.diagnosis_code;
    table.diagnosis_name=tab.diagnosis_name;
    table.manually_created=tab.manually_created;
    table.creation_date_time=tab.creation_date_time;
    return table;
}
}
