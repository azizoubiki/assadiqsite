import { Pipe, PipeTransform } from '@angular/core';
import millify from "millify";

import  * as  isocode from 'iso-639-1';
import  * as  haversine from 'haversine';



@Pipe({
  name: 'miliffynumber',
  
})
export class MiliffynumberPipe implements PipeTransform {

    
    transform(value: any,pipe: any,userlocation?: any, ...args: unknown[]): any {
    console.log(value)
    console.log(userlocation)
    switch (pipe) {
      case 'number':
        let v ;
        if(value === 0) {
        v = 0

      }else{
        v = millify(value);

      }
    return v;
        break;

        case 'tonumber':
     let tv = Number(value)
      return  tv;
          break;

          case 'distance':
            const start = {
              latitude: value !== 'null'  ? value[0] : 0,
              longitude: value !== 'null' ? value[1] : 0
            }
            
            const end = {
              latitude:userlocation ? userlocation[0] :0,
              longitude:userlocation ? userlocation[1] : 0
            }
            let dis = haversine(start,end,{unit: 'km'})
             return  dis;
                 break;

        case 'language':
          if(value){
        let codeisotoname = isocode.default.getName(value.slice(0,2).toLowerCase());
    return codeisotoname;
  }
        break;

  case 'buffer':
    if(value instanceof ArrayBuffer){
      console.log(value)
let blob = new Blob([value]);
 let url = URL.createObjectURL(blob)
return url;
}else{
return value;

}
  break;
      default:
        break;
    }
    
  }

}
