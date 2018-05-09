import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerNumberPipe } from './per-number.pipe';
import { PersianNumberService } from "../utils/persian-number.service";
import { EngToPerNumberPipe } from './eng-to-per-number.pipe';
import { NumToPerWordPipe } from './num-to-per-word.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerNumberPipe, EngToPerNumberPipe, NumToPerWordPipe],
  exports: [PerNumberPipe, EngToPerNumberPipe, NumToPerWordPipe],
  providers: [PersianNumberService],
})
export class PipesModule { }
