import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Buffer } from 'rxdb';

@Injectable({
  providedIn: 'root'
})
export class InterfacesService {

  constructor() { }
}
export interface tokenresponse{
  access_token: string,
  token_type: string,
  expires_in: string,
  scope: string,
  extensions: TokenExtensions
}
interface TokenExtensions{
  provider_branch_timezone: string,
  provider_branch_id: string,
  client_name: string,
  provider_slug: string,
  rcm_user_roles: string
}

export interface chargerTable{
  id:string,
  origin_event_id:string,
  origin_event_description:string,
  code:string,
  agreement_code:string,
  provider_branch_code:string,
  service_type:string,
  service_type_code:string,
  patient_id:string,
  patient_name:string,
  patient_document_type:string,
  patient_document_number:string,
  invoiceable:boolean,
  healthcare_plan_coverage_code:string,
  quantity:number,
  provider_product_code:string,
  description:string,
  amount:number,
  total_amount:number,
  currency:string,
  authorization_id:string,
  diagnostic_test_number:string,
  diagnosis_code:string,
  diagnosis_name:string,
  manually_created:boolean,
  creation_date_time:Date,
  DocumentType:documentType[]
}

export interface chargerTableinv{
  id:string,
  origin_event_id:string,
  origin_event_description:string,
  code:string,
  agreement_code:string,
  provider_branch_code:string,
  service_type:string,
  service_type_code:string,
  patient_id:string,
  patient_name:string,
  patient_document_type:string,
  patient_document_number:string,
  invoiceable:boolean,
  healthcare_plan_coverage_code:string,
  quantity:number,
  provider_product_code:string,
  description:string,
  amount:number,
  total_amount:number,
  currency:string,
  authorization_id:string,
  diagnostic_test_number:string,
  diagnosis_code:string,
  diagnosis_name:string,
  manually_created:boolean,
  creation_date_time:string,
  invoiced:boolean,
  Invoice:string,
  DocumentType:documentType[]

}

export interface chargerConsume{
  origin_event_id:string,
  origin_event_description:string,
  code:string,
  agreement_code:string,
  provider_branch_code:string,
  service_type_code:string,
  patient_id:string,
  patient_name:string,
  patient_document_type:string,
  patient_document_number:string,
  invoiceable:boolean,
  healthcare_plan_coverage_code:string,
  quantity:number,
  provider_product_code:string,
  description:string,
  amount:number,
  total_amount:number,
  currency:string,
  authorization_id:string,
  diagnostic_test_number:string,
  diagnosis_code:string,
  diagnosis_name:string,
  manually_created:boolean,
  creation_date_time:Date
}

export interface header{
  origin:string,
  AttentionName:string,
 patient:patient
}

export interface patient{
  IdPatient:string,
  PatientName:string,
  TypeId:string,
  Id:string

}
export interface ServiceTypes{
  Type:string,
  Code:string,
  Document:boolean,
  Service:price[]
}
interface price{
  ServiceDesc:string,
  ServiceCode:string,
  ServicePrice:number,
  ServiceCurrency:string,
  Documents:documentType[]
}

export interface invoice{
  id:string,
  Charge:chargerTableinv[],
  Origin_id:string,
  Invoice:string,
  Documents:documents
}

export interface assigncharges{
  invoice_number: string,
  charge_codes: string[],
  agreement_code: string

}

export interface uploadData{
  toJson(): string | Blob;
  support_file_code:string
  events:events[],
  NOauthorization_id:string,
  NOauthorized_by:string,
  support_file_metadata:support_file_metadata
}

interface events{
  origin_event_id:string,
  charge_codes:string[]
  
}
interface support_file_metadata{
  invoice_number:string,
  invoice_amount:string,
  invoice_date_time:Date,
  invoice_electronic_code:string
}

export interface UPloadFiles{
  charger:string,
  file:File,
  type:string
}

export interface documentType{
  Document:boolean,
  Doc:File,
  CodSupport:string,
  NameSupport:string
}

export interface documents{
  Fact:document,
  Epic:document,
  Deta:document,
  Hc:document
}

export interface document{
  Document:boolean,
  Doc:File
 
}
export interface beneficiary{
  form_slug:string,
  provider_slug:string,
  inputs:inputs[]
}
export interface inputs{
  slug:string,
  value:string
}
export interface beneficiaryresponse{
links:link[],
content:contentbeneficiary[]
}

interface link{
  rel: string,
  href: string,
  hreflang: string,
  media: string,
  title: string,
  type: string,
  deprecation: string
}

export interface contentbeneficiary{
  id: string,
  name: string,
  sponsor_slug: string,
  status: string,
  nationality_country_code: string,
  identity_document_type: string,
  identity_document_id: string,
  sex: string,
  date_of_birth: Date,
  age: string,
  kinship: string,
  owner: boolean,
  additional_information: string
}

export interface contentdx{
  diagnosis_id: string,
  diagnosis_synonym_id: string,
  coding_system: string,
  code: string,
  name: string,
  tags: string[]
}

export interface diagnosis{
  links:link[],
  content:contentdx[]
}

export interface medico{
  nombre:string,
  especialidad:string,
  colegiado:string
}

export interface medicamentos{
  externalTransactionId: string,
  treatment:treatment
}
export interface treatment{
  productId:string,
  productIds:string[],
  dosageMeasurementUnitSlug:string,
  quantity:string,
  treatmentDurationDays:Number,
  frequencies:frequencies[],
  composition: string,
  treatmentId: string,
  additionalNotes: string,
  brand: string,
  drugFormSlug: string,
  drugFormName: string,
  treatmentIndications:string[]
  numberOfRefills: string,
  refillNumber: string,
  refillFormDate: string
}

interface frequencies{
  singleDose: boolean,
  frequencyInHours: number,
  dosage: number,
  frequencyByDayTime: number
  specificAdministrationTime: string
}

export interface authorization{
  beneficiary_id:number,
  beneficiary_email:string,
  beneficiary_phone_number:string,
  provider_slugs:string[],
  sponsor_slug:string,
  doctor_medical_license_number:string,
  doctor_country_code:string,
  doctor_specialty_name:string,
  doctor_name:string,
  diagnoses:diagnoses[]
  products:string[],
  treatments:treatmentinternal[]
}
export interface diagnoses{
  coding_system:string,
  code:string,
  type:string
}
export interface treatmentinternal{
  treatment_id:string,
  brand:string,
  drug_form_slug:string,
  drug_form_name:string,
  dosage_measurement_unit_slug:string,
  treatment_duration_days:number,
  product_ids:number[],
  composition:string,
  number_of_refills:string,
  refill_form_date:string,
  refill_number:string,
  frequencies:frequenciesinternal[]
}

export interface frequenciesinternal{
  single_dose: boolean,
  frequency_in_hours: number,
  dosage: number,
  frequency_by_day_time: number
  specific_administration_time: string
}
export interface dispensedrug{
  id: number,
  selected:boolean,
  code: string,
  name: string,
  quantity: number,
  price:string,
  full:number
}


export interface dispensations{
products:products[],
currency_code:string
}

export interface products{
  id: number,
  product_code: string,
  price:number,
  quantity:number,
  taxes:number
}
