import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersianNumberPipe } from './persian-number.pipe';
import {PersianNumberService} from "../utils/persian-number.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PersianNumberPipe],
  exports: [PersianNumberPipe],
  providers: [PersianNumberService],
})
export class PersianNumberModule {

}
