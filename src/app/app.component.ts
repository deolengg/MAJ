
import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav} from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
//import { SignUp } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
//import { Main } from '../pages/main/main';



@Component({
    
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class MyApp {
    @ViewChild('myNav') nav: Nav;
    rootPage:any = HomePage;
    
    
    constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
            public menuCtrl: MenuController,

  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
      this.menuCtrl.enable(false, 'right');

    });
  }
    logOut(){
        this.nav.push(Login);
    }
    
    
}

