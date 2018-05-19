import { Pipe, PipeTransform } from '@angular/core';
import {PersianNumberService} from "./utils/persian-number.service";

@Pipe({
  name: 'moneyFormatter'
})
export class MoneyFormatterPipe implements PipeTransform {
  currencies = {'IRR': ' ریال '};
  constructor(private persianNumberService: PersianNumberService) { }

  transform(inputValue: number, currency?): string {
    var curCurrency = this.currencies[currency] ? this.currencies[currency] : '';
    var sign = Math.sign(inputValue) === -1 ? '-': '';
    if(inputValue)
      return this.persianNumberService.toPersianNumber(Math.abs(inputValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).toString() + sign + curCurrency;
    else {
      return '۰';
    }

  }

}
