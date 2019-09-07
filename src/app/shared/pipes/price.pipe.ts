import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    console.log(value)
    return value;
  }

}
