import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cart } from '../cart/cart';


@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class Product {

  constructor(public navCtrl: NavController) {

  }
  goToCart(){
  this.navCtrl.push(Cart);
  }

}
