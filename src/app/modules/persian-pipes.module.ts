import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerNumberPipe } from './per-number.pipe';
import { PersianNumberService } from "./utils/persian-number.service";
import { PerToEngNumberPipe } from './per-to-eng-number.pipe';
import { NumToPerWordPipe } from './num-to-per-word.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerNumberPipe, PerToEngNumberPipe, NumToPerWordPipe],
  exports: [PerNumberPipe, PerToEngNumberPipe, NumToPerWordPipe],
  providers: [PersianNumberService],
})
export class PersianPipesModule { }
