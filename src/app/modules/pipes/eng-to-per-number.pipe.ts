import { Pipe, PipeTransform } from '@angular/core';
import {PersianNumberService} from "../utils/persian-number.service";

@Pipe({
  name: 'engToPerNumber'
})
export class EngToPerNumberPipe implements PipeTransform {

  constructor(private persianNumberService: PersianNumberService) { }

  transform(inputValue: string): number {
    try {
      return this.persianNumberService.toEngNumber(inputValue);
    }
    catch (e) {
      return 0;
    }
  }

}
