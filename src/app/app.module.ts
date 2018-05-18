import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { SairPage } from './../pages/sair/sair';
import { HistoricoPage } from './../pages/historico/historico';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistroPontoProvider } from '../providers/registro-ponto/registro-ponto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    HistoricoPage,
    SairPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    HistoricoPage,
    SairPage
  ],
  providers: [
    Geolocation,
    BrowserModule,
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegistroPontoProvider,
  ]
})
export class AppModule {}
