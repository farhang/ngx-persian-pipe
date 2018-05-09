# ngx-persian-pipe

Persian pipes for Angular 2+ applications.

Install

npm install ngx-persian-pipe --save

Usage

Import PipesModule into your app.module.ts as follows:

import { PersianPipesModule } from 'ngx-persian-pipe';

  imports: [
    BrowserModule,
    PersianPipesModule
  ],

suse in your app templates as follows: 

{{'3423432' |  perNumber}}

{{'۲۱۳۴۲۳۴۲۳' |  perToEngNumber}}

{{'12312' |  numToPerWord}}

