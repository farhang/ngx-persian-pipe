# ngx-persian-pipe

Persian pipes for Angular 2+ applications.

Install

npm install ngx-persian-pipe --save

Usage

Import PipesModule into your app's modules:

import { PipesModule } from "ngx-persian-pipe";

@NgModule({
  imports: [
    PipesModule
  ]
})

use in your app template as follows: 

{{'138793' | 'engToPerNumber'}} 

{{'138793' | 'numToPerWord'}}
 
{{'۱۳۸۷۹۳' | 'perNumber'}} 
