import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersianNumberPipe } from './modules/persianNumber/persian-number.pipe';
import {PersianNumberService} from "./modules/utils/persian-number.service";
@NgModule({
  declarations: [
    AppComponent,
    PersianNumberPipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [PersianNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
