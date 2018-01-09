import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from "../product/product";


@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class Main {
  constructor(public navCtrl: NavController) {

  }
  goToProductPage(){
    this.navCtrl.push(Product);
  }
}

