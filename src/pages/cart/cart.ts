import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Checkout } from '../checkout/checkout';


@Component({
  selector: 'cart',
  templateUrl: 'cart.html'
})
export class Cart {
     constructor(public navCtrl: NavController) {}

   goToCheckout(){
    this.navCtrl.push(Checkout);
   }
}
