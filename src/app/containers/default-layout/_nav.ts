import { INavData } from '@coreui/angular';
import { AppConfigService} from "src/app/Services/Common/app-config-service.service";
import { isConstructorDeclaration } from 'typescript';


export class _nav{
constructor(private Appconfig:AppConfigService){

}
}

export const navItems =(perm:any):INavData[]=>{
  var items=[] as INavData[];
  const itemsarmado: INavData[] = [
    {
      title: true,
      name: 'RCM'
    },
    {
      name: 'Crear Cargos',
      url: './charges',
      iconComponent: { name: 'cil-pencil' }
    },
    {
      name: 'Asociar Facturas',
      url: './invoice',
      iconComponent: { name: 'cil-credit-card' }
    },
    {
      name: 'Subir Documentos',
      url: './upload',
      iconComponent: { name: 'cil-puzzle' }
    }
  ];

  const ItemsSeguros: INavData[] = [
    {
      title: true,
      name: 'Seguros'
    },
    {
      name: 'Pre autorización',
      url: './preauthorization',
      iconComponent: { name: 'cil-user-follow' }
    },
    {
      name: 'Dispensación',
      url: './dispensing',
      iconComponent: { name: 'cil-share-all' }
    },
  ];
try{
  if(perm.modules.find((x:any)=>x=="armado")){
  itemsarmado.forEach(element => {
    items.push(element)
  });
}
if(perm.modules.find((x:any)=>x=="seguros")){
  ItemsSeguros.forEach(element => {
    items.push(element)
  });
}
}catch(err){
  console.log(err)
}
return items
}

