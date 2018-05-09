import { Pipe, PipeTransform } from '@angular/core';
import {PersianNumberService} from "./utils/persian-number.service";

@Pipe({
  name: 'numToPerWord'
})
export class NumToPerWordPipe implements PipeTransform {

  constructor(private persianNumberService: PersianNumberService) { }

  transform(inputValue: string): string {
    try {
      var number = this.persianNumberService.toEngNumber(inputValue);
      return this.persianNumberService.toPersianWord(inputValue);
    }
    catch(e){
      return `${inputValue} is not valid number!`;
    }

  }

}
