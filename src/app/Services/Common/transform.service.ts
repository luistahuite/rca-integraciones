import { Injectable } from '@angular/core';
import { AppConfigService } from "src/app/Services/Common/app-config-service.service";
import {
  tokenresponse, beneficiary,
  beneficiaryresponse, inputs, contentbeneficiary, diagnosis, contentdx,
  medico, medicamentos, authorization, diagnoses, treatment, treatmentinternal, frequenciesinternal
} from "src/app/Services/Common/interfaces.service";
import { TokenService } from 'src/app/Services/Security/token.service';

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  constructor(private Token: TokenService, private AppConfig: AppConfigService) { }


  CreateAuthorization(patient: contentbeneficiary,dx:contentdx[],med:medico,medicamentos:medicamentos[]): authorization {

    const authorize = {} as authorization
    authorize.beneficiary_id = +patient.id
    authorize.beneficiary_email = "dmarenco@osigu.com"
    authorize.beneficiary_phone_number = "45233965"
    authorize.provider_slugs = [] as string[]
    authorize.provider_slugs.push(this.AppConfig.provider_slug)
    authorize.sponsor_slug = this.AppConfig.sponsor_slug
    authorize.doctor_medical_license_number = med.colegiado
    authorize.doctor_country_code = "GT"
    authorize.doctor_specialty_name = med.especialidad
    authorize.doctor_name = med.nombre
    authorize.diagnoses = [] as diagnoses[]
    dx.forEach(dx => {
      const diag = {} as diagnoses
      diag.code = dx.code
      diag.coding_system = dx.coding_system
      diag.type = "MEDICAL_DIAGNOSIS"
      authorize.diagnoses.push(diag)
    });
    authorize.products = [] as string[]
    authorize.treatments = [] as treatmentinternal[]
    medicamentos.forEach(medica => {

      const medint = {} as treatmentinternal
      medint.treatment_id = medica.treatment.treatmentId
      medint.brand = medica.treatment.brand
      medint.drug_form_slug = medica.treatment.drugFormSlug
      medint.drug_form_name = medica.treatment.drugFormName
      medint.dosage_measurement_unit_slug = medica.treatment.dosageMeasurementUnitSlug
      medint.treatment_duration_days=+medica.treatment.treatmentDurationDays
      medint.product_ids = [] as number[]
      medica.treatment.productIds.forEach(num => {
        medint.product_ids.push(+num)
      })
      medint.composition = medica.treatment.composition
      medint.number_of_refills = medica.treatment.numberOfRefills
      medint.refill_number = medica.treatment.refillNumber

      medint.refill_form_date = medica.treatment.refillFormDate
      medint.frequencies = [] as frequenciesinternal[]
      const freqint = {} as frequenciesinternal
      freqint.dosage = medica.treatment.frequencies[0].dosage
      freqint.frequency_by_day_time = medica.treatment.frequencies[0].frequencyByDayTime
      freqint.frequency_in_hours = medica.treatment.frequencies[0].frequencyInHours
      freqint.single_dose = medica.treatment.frequencies[0].singleDose
      freqint.specific_administration_time = medica.treatment.frequencies[0].specificAdministrationTime
      medint.frequencies.push(freqint)
      authorize.treatments.push(medint)
    })
  return authorize
  }
}
