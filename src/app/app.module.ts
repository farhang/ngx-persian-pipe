import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersianPipesModule } from "./modules/persian-pipes.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PersianPipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
