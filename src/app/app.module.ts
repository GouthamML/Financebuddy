import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartsModule } from 'ng2-charts';
import { MCSService } from '../providers/mcsService';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { risk } from '../pages/risk/risk';
import { year } from '../pages/year/year';
import { charts } from '../pages/charts/charts';
import { login } from '../pages/login/login';

import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    risk,
    year,
    charts,
    login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    risk,
    year,
    charts,
    login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MCSService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
