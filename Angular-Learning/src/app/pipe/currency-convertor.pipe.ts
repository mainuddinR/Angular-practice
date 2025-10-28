import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(args);
    let [data]=args
    if(args.length>0){
      return value*data;
    }
    return value*0.5;
  }

}
