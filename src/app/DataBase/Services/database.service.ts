import { Injectable } from '@angular/core';
import {CHARGER_SCHEMA,DISPENSE_SCHEMA,INVOICES_SCHEMA} from '../Schemas/Charger.invoice';
import {createRxDatabase} from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import {ChargesDatabase,ChargesDocument,ChargesCollections} from '../ConfigDB/RxDB'
const collectionSettings = {
  ["charges"]: {
      schema: CHARGER_SCHEMA,
      },
  ["invoices"]: {
    schema: INVOICES_SCHEMA,
    },
  ["dispense"]: {
    schema: DISPENSE_SCHEMA,
    }
  }
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  get db(): ChargesDatabase {
    return DB_INSTANCE;
  }
}
async function _create(): Promise<ChargesDatabase> {
  const db = await createRxDatabase<ChargesCollections>({
      name: "RCM-Osigu",
      storage: getRxStorageDexie(),
      multiInstance: true
      // password: 'myLongAndStupidPassword' // no password needed
  });
      (window as any)['db'] = db;
  await db.addCollections(collectionSettings);
  return db;
}
let initState: null | Promise<any> = null;
let DB_INSTANCE: ChargesDatabase;
export async function initDatabase() {
  if (!initState) {
      initState = _create().then(db => DB_INSTANCE = db);
  }
  await initState;
}



