# ngx-persian-pipe

Persian pipes for Angular 2+ applications.

## Install
```
npm install ngx-persian-pipe --save
```

## Usage

Import PersianPipesModule into your app.module.ts as follows:
```
import { PersianPipesModule } from 'ngx-persian-pipe';

  imports: [
    BrowserModule,
    PersianPipesModule
  ],
```

##Examples:
Use in your app templates as follows: 

{{'123' |  perNumber}}  // output => ۱۲۳

{{'۱۲۳' |  perToEngNumber}} // output => 123

{{'123' |  numToPerWord}} // => صد و بیست و سه

{{'123123123' |  moneyFormatter: 'IRR'}} // =>  ۱۲۳,۱۲۳,۱۲۳ ریال
{{'123123123' |  moneyFormatter}} // =>  ۱۲۳,۱۲۳,۱۲۳

## Contribute
1. install nodejs and npm.
2. install @angular/cli.
3. clone the project.
4. Run the following command on ngx-persian-pipe folder:
```
npm install
```
5. Run the following command to serve the project:
```
ng serve
```
## License
MIT © [Farhang Darzi](mailto:farhang.darzi@gmail.com)
