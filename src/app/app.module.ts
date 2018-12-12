import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {NgxMaskModule} from 'ngx-mask'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrerPage } from '../pages/registrer/registrer';

import { Alert } from '../util/alert';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrerPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxMaskModule.forRoot(),
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Alert
  ]
})
export class AppModule {}
