import { Pipe, PipeTransform } from '@angular/core';
import { PersianNumberService } from './utils/persian-number.service'

@Pipe({
  name: 'perNumber'
})
export class PerNumberPipe implements PipeTransform {
  constructor(private persianNumberService: PersianNumberService) { }
  transform(inputValue: string): string {
    return this.persianNumberService.toPersianNumber(inputValue);
  }

}
