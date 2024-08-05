import { Injectable } from '@angular/core';
import { header, patient, ServiceTypes } from './interfaces.service';

@Injectable({
  providedIn: 'root'
})



export class ListsService {
  private patients: any;
  constructor() { }
}
export const patients: patient[] =
  [
    {
      Id: '123456',
      IdPatient: '111',
      PatientName: 'Dereck Marenco',
      TypeId: 'CC'
    },
    {
      Id: '1123456',
      IdPatient: '222',
      PatientName: 'Oscar Chilel',
      TypeId: 'CC'
    }, {
      Id: '999888',
      IdPatient: '333',
      PatientName: 'Jhon Mario Arias',
      TypeId: 'CC'
    }, {
      Id: '222333',
      IdPatient: '444',
      PatientName: 'Jairo Claro',
      TypeId: 'CC'
    },
    {
      Id: '999999',
      IdPatient: '999',
      PatientName: 'Andres Obando',
      TypeId: 'CC'
    },
  ]
export const attetions: string[] = [
  "Hospitalización ",
  "Consulta Externa ",
  "Emergencia médica ",
  "Ayudas Diagnósticas "
]

export const serviceTypes: ServiceTypes[] = [
  {
    Type: "CONSULTA EXTERNA",
    Code: "1",
    Document: false,

    Service:
      [
        {
          ServiceCode: "089303",
          ServiceDesc: "Consulta Médica",
          ServiceCurrency: "COP",
          ServicePrice: 25000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            },
          ]
        },
        {
          ServiceCode: "218913",
          ServiceDesc: "Consulta esp",
          ServiceCurrency: "COP",
          ServicePrice: 60000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "235200",
          ServiceDesc: "Consulta enf",
          ServiceCurrency: "COP",
          ServicePrice: 15000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        }
      ]
  },

  {
    Type: "HOSPITALIZADOS",
    Code: "2",
    Document: true,
    Service:
      [
        {
          ServiceCode: "787600",
          ServiceDesc: "UCI",
          ServiceCurrency: "COP",
          ServicePrice: 560000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "877501",
          ServiceDesc: "Observación",
          ServiceCurrency: "COP",
          ServicePrice: 250000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'IMA',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Imagenes'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "778932",
          ServiceDesc: "Sala de Sutura",
          ServiceCurrency: "COP",
          ServicePrice: 95000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "069400",
          ServiceDesc: "Urgentólogo",
          ServiceCurrency: "COP",
          ServicePrice: 150000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        }
      ]
  },

  {
    Type: "URGENCIAS",
    Code: "0",
    Document: true,
    Service:
      [
        {
          ServiceCode: "783306",
          ServiceDesc: "Heces Completo",
          ServiceCurrency: "COP",
          ServicePrice: 35000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "783308",
          ServiceDesc: "Hemograma",
          ServiceCurrency: "COP",
          ServicePrice: 40000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "777400",
          ServiceDesc: "Perfil Lipídico",
          ServiceCurrency: "COP",
          ServicePrice: 32500,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "789201",
          ServiceDesc: "Toma de Muestras",
          ServiceCurrency: "COP",
          ServicePrice: 12000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        }
      ]

  }
  , {
    Type: "CIRUGIA GENERAL",
    Code: "3",
    Document: true,
    Service:
      [
        {
          ServiceCode: "669502",
          ServiceDesc: "Sutura",
          ServiceCurrency: "COP",
          ServicePrice: 60000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "416201",
          ServiceDesc: "Curacion",
          ServiceCurrency: "COP",
          ServicePrice: 40000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "419400",
          ServiceDesc: "Esterilización",
          ServiceCurrency: "COP",
          ServicePrice: 20000,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        },
        {
          ServiceCode: "428600",
          ServiceDesc: "cauterización",
          ServiceCurrency: "COP",
          ServicePrice: 34200,
          Documents: [
            {
              CodSupport: 'AUTO',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Autorizaciones'
            },
            {
              CodSupport: 'DSQX',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Descripción QX'
            },
            {
              CodSupport: 'DSPSN',
              Doc: {} as File,
              Document: false,
              NameSupport: 'Dispensacion Medicamentos No Pbs'
            }
          ]
        }
      ]
  }
]