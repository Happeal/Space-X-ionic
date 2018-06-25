import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpacexApiProvider } from '../provider/spacex-api/spacex-api';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LaunchListPage,
    RocketListPage,
    CapsuleListPage,
    LaunchpadListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LaunchListPage,
    RocketListPage,
    CapsuleListPage,
    LaunchpadListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider

  ]
})
export class AppModule {}
