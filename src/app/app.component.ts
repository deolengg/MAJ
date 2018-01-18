import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import {App} from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { Main } from '../pages/main/main';
import { Login } from '../pages/login/login';
import { WishList } from '../pages/wishlist/wishlist';
import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;
    user;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
            public menuCtrl: MenuController,
               public app: App,
               public store : Storage
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
        this.app.getActiveNav().push(Login);
    }
    goToWishList(){
        this.app.getActiveNav().push(WishList);
    }
    updateUser(user) {
        this.user=user;
    }
    goToMain(){
        this.app.getActiveNav().push(Main);
    }

}