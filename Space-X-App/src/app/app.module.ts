import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { SpacexApiProvider } from '../provider/spacex-api/spacex-api';
import { HttpClientModule } from '@angular/common/http';
import { DetailsLaunchPage } from '../pages/details-launch/details-launch';
import { DetailsRocketPage } from '../pages/details-rocket/details-rocket';
import { DetailsCapsulePage } from '../pages/details-capsule/details-capsule';
import { DetailsLaunchpadPage } from '../pages/details-launchpad/details-launchpad';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    DetailsLaunchPage,
    DetailsRocketPage,
    DetailsCapsulePage,
    DetailsLaunchpadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    DetailsLaunchPage,
    DetailsRocketPage,
    DetailsCapsulePage,
    DetailsLaunchpadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider
  ]
})
export class AppModule {}
