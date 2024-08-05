import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema
} from 'rxdb';

export const CHARGES_SCHEMA_LITERAL = {
    title: 'Charges schema',
    description: 'cargos',
    version: 0,
    keyCompression: false,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            default: '',
            maxLength: 100
        },
        Origin_id: {
            type: 'string',
            default: '',
            maxLength: 100
        },
        Invoice: {
            type: 'string',
            default: '',
            maxLength: 100
        },
        Documents: {
            type: 'object',
            properties: {
                Fact: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                },
                Epic: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                },
                Hc: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                },
                Deta: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                }
            }
        },
        Charge: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    origin_event_id: { type: 'string' },
                    origin_event_description: { type: 'string' },
                    code: { type: 'string' },
                    agreement_code: { type: 'string' },
                    service_type: { type: 'string' },
                    service_type_code: { type: 'string' },
                    patient_id: { type: 'string' },
                    patient_name: { type: 'string' },
                    patient_document_type: { type: 'string' },
                    patient_document_number: { type: 'string' },
                    invoiceable: { type: 'boolean' },
                    healthcare_plan_coverage_code: { type: 'string' },
                    quantity: { type: 'number' },
                    provider_branch_code: { type: 'string' },
                    provider_product_code: { type: 'string' },
                    description: { type: 'string' },
                    amount: { type: 'number' },
                    total_amount: { type: 'number' },
                    currency: { type: 'string' },
                    authorization_id: { type: 'string' },
                    diagnostic_test_number: { type: 'string' },
                    diagnosis_code: { type: 'string' },
                    diagnosis_name: { type: 'string' },
                    manually_created: { type: 'boolean' },
                    creation_date_time: { type: "string", format: "date-time" },
                    invoiced: { type: 'boolean', default: false },
                    Invoice: { type: 'string' },
                    DocumentType: {
                        type: 'array',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            properties: {
                                Document: { type: 'boolean' },
                                Doc: { type: 'object' },
                                CodSupport: { type: 'string' },
                                NameSupport: { type: 'string' }
                            }
                        }
                    }
                }
            }

        }
    },
    required: ['id',]
} as const;


export const INVOICES_SCHEMA_LITERAL = {

    title: 'Invoices schema',
    description: 'Asociación de cargos con facturas',
    version: 0,
    keyCompression: false,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            default: '',
            maxLength: 100
        },
        Origin_id: {
            type: 'string',
            default: '',
            maxLength: 100
        },
        Invoice: {
            type: 'string',
            default: '',
            maxLength: 100
        },
        Documents: {
            type: 'object',
            properties: {
                Fact: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                },
                Epic: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                },
                Hc: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                },
                Deta: {
                    type: 'object',
                    properties: {
                        Document: { type: 'boolean' },
                        Doc: { type: 'object' }
                    }
                }

            }
        },
        Charge: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    origin_event_id: { type: 'string' },
                    origin_event_description: { type: 'string' },
                    code: { type: 'string' },
                    agreement_code: { type: 'string' },
                    service_type: { type: 'string' },
                    service_type_code: { type: 'string' },
                    patient_id: { type: 'string' },
                    patient_name: { type: 'string' },
                    patient_document_type: { type: 'string' },
                    patient_document_number: { type: 'string' },
                    invoiceable: { type: 'boolean' },
                    healthcare_plan_coverage_code: { type: 'string' },
                    quantity: { type: 'number' },
                    provider_branch_code: { type: 'string' },
                    provider_product_code: { type: 'string' },
                    description: { type: 'string' },
                    amount: { type: 'number' },
                    total_amount: { type: 'number' },
                    currency: { type: 'string' },
                    authorization_id: { type: 'string' },
                    diagnostic_test_number: { type: 'string' },
                    diagnosis_code: { type: 'string' },
                    diagnosis_name: { type: 'string' },
                    manually_created: { type: 'boolean' },
                    creation_date_time: { type: "string", format: "date-time" },
                    invoiced: { type: 'boolean', default: false },
                    Invoice: { type: 'string' },
                    DocumentType: {
                        type: 'array',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            properties: {
                                Document: { type: 'boolean' },
                                Doc: { type: 'object' },
                                CodSupport: { type: 'string' },
                                NameSupport: { type: 'string' }
                            }
                        }
                    }
                }
            }

        }
    },
    required: ['id',]
} as const;

export const DISPENSE_SCHEMA_LITERAL = {

    title: 'Dispense schema',
    description: 'Dispensación',
    version: 0,
    keyCompression: false,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            default: '',
            maxLength: 100
        },
        Products: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    code: { type: 'string' },
                    name: { type: 'string' },
                    quantity: { type: 'number' },
                    price: { type: 'string' },
                    selected: { type: 'boolean' },
                }
            }

        }
    },
    required: ['id',]
} as const;




const schemaTyped = toTypedRxJsonSchema(CHARGES_SCHEMA_LITERAL);
const schemaTypedinvoice = toTypedRxJsonSchema(INVOICES_SCHEMA_LITERAL);
const schemaTypeddispense = toTypedRxJsonSchema(DISPENSE_SCHEMA_LITERAL);
export type ChargesDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export type invoicesDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTypedinvoice>;
export type dispenseDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTypeddispense>;
export const CHARGER_SCHEMA: RxJsonSchema<ChargesDocumentType> = CHARGES_SCHEMA_LITERAL;
export const INVOICES_SCHEMA: RxJsonSchema<invoicesDocumentType> = INVOICES_SCHEMA_LITERAL;
export const DISPENSE_SCHEMA: RxJsonSchema<dispenseDocumentType> = DISPENSE_SCHEMA_LITERAL;