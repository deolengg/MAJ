import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { SignUp } from '../pages/signup/signup';
import { Main } from '../pages/main/main';
import { Product } from '../pages/product/product';
import { Cart } from '../pages/cart/cart';
import { WishList } from '../pages/wishlist/wishlist';
import { Invoice } from '../pages/invoice/invoice';
import { DeveloperPanel } from '../pages/developer/developer';
import { Checkout } from '../pages/checkout/checkout';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    SignUp,
    Main,
    Product,
    Cart,
    WishList,
    Invoice,
    DeveloperPanel,
    Checkout
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    SignUp,
    Main,
    Product,
    Cart,
    WishList,
    Invoice,
    DeveloperPanel,
    Checkout
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
