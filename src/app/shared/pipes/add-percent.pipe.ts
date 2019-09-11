import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPercent'
})
export class AddPercentPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${value}%`;
  }

}
