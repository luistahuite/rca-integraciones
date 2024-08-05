import type {
    RxDocument,
    RxCollection,
    RxDatabase
} from 'rxdb';
import { ChargesDocumentType,dispenseDocumentType,invoicesDocumentType } from '../Schemas/Charger.invoice';

// ORM methods
type RxHeroDocMethods = {
    hpPercent(): number;
};


export type ChargesDocument = RxDocument<ChargesDocumentType>;
export type InvoicesDocument = RxDocument<invoicesDocumentType>;
export type DispenseDocument = RxDocument<dispenseDocumentType>;

export type ChargesCollection = RxCollection<ChargesDocumentType, {}>;
export type InvoicesCollection = RxCollection<invoicesDocumentType, {}>;
export type DispenseCollection = RxCollection<dispenseDocumentType, {}>;

export type ChargesCollections = {
    charges: ChargesCollection;
    invoices:InvoicesCollection;
    dispense:DispenseCollection
};

export type ChargesDatabase = RxDatabase<ChargesCollections>;