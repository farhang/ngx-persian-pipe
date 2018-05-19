import { Pipe, PipeTransform } from '@angular/core';
import {PersianNumberService} from "./utils/persian-number.service";

@Pipe({
  name: 'moneyFormatter'
})
export class MoneyFormatterPipe implements PipeTransform {
  constructor(private persianNumberService: PersianNumberService) { }

  transform(inputValue: string, currency?): string {
    if(inputValue && currency==='IRR') {
      return this.persianNumberService.toPersianNumber(inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).toString() + ' ریال ';
    }
    if(inputValue && !currency) {
      return this.persianNumberService.toPersianNumber(inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).toString();
    }
    else {
      return '۰';
    }
  }

}
