import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersianNumberService } from "./modules/utils/persian-number.service";
import { PerNumberPipe } from './modules/pipes/per-number.pipe';
import { EngToPerNumberPipe } from './modules/pipes/eng-to-per-number.pipe';
import { NumToPerWordPipe  } from "./modules/pipes/num-to-per-word.pipe";
@NgModule({
  declarations: [
    AppComponent,
    PerNumberPipe,
    EngToPerNumberPipe,
    NumToPerWordPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [PersianNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
