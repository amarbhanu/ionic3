import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HotcareerPage } from '../pages/hotcareer/hotcareer';

import { ContactFormComponent } from '../components/contact-form/contact-form';

import { QuestionSetFormComponent } from '../components/question-set-form/question-set-form';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductProvider } from '../providers/product/product';

import {HttpClientModule} from '@angular/common/http';

import {ProductDetailPage} from '../pages/product-detail/product-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HotcareerPage,
    ProductDetailPage,
    ContactFormComponent,
    QuestionSetFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HotcareerPage,
    ProductDetailPage,
    ContactFormComponent,
    QuestionSetFormComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider
  ]
})
export class AppModule {}
