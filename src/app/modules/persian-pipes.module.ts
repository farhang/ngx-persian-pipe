import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerNumberPipe } from './per-number.pipe';
import { PersianNumberService } from "./utils/persian-number.service";
import { PerToEngNumberPipe } from './per-to-eng-number.pipe';
import { NumToPerWordPipe } from './num-to-per-word.pipe';
import { MoneyFormatterPipe } from './money-formatter.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerNumberPipe, PerToEngNumberPipe, NumToPerWordPipe, MoneyFormatterPipe],
  exports: [PerNumberPipe, PerToEngNumberPipe, NumToPerWordPipe, MoneyFormatterPipe],
  providers: [PersianNumberService],
})
export class PersianPipesModule { }
