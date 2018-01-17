import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cart } from '../cart/cart';
import { NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class Product {
    id;
    product = {};
    user;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
     public rest : RestProvider,
     public alertCtrl : AlertController,
     public store : Storage
 ) {
    this.id = params.get('productId');

  }
    ngOnInit() {
         this.store.get("email").then(email => {
            this.user = email;
        });
        this.rest.getProduct(this.id).subscribe(data => {this.product=data})
    }
    
  goToCart(){
  this.navCtrl.push(Cart);
  }
    addToWishList(productId){
        this.rest.addToWisList(productId, this.user).subscribe(data => {
             let alert = this.alertCtrl.create({
            title: 'Product Added',
            subTitle: 'Product is added to your wish list',
            buttons: ['Okay']
        });
        alert.present();
        }, err=>{
             let alert = this.alertCtrl.create({
            title: 'Operation Failed',
            subTitle: 'Try Again,later',
            buttons: ['Okay']
        });
        alert.present();
        });
    }

}
