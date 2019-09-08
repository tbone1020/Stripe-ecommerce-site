import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {


  transform(value: string, ...args: any[]): any {
    let priceFormatted = this.formatPrice(value);
    return priceFormatted;
  }

  formatPrice(value): string {
    const priceContainsDecimal = value.toString().indexOf(".") !== -1;
    if (priceContainsDecimal) {
      return `$${value}`;
    }

    return `$${value}.00`
  }

}
