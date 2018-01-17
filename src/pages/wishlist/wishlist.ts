import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from "../product/product";
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'wishlist',
  templateUrl: 'wishlist.html'
})
export class WishList {
    wishlist;
    user;
  constructor(
     public navCtrl: NavController,
     public rest : RestProvider,
      public store : Storage
  ) {

  }
    
    ngOnInit() {
        this.store.get("email").then(email => {
            this.user = email;
            this.loadWishList();
        });
    }
    
    loadWishList() {
        this.rest.getWishList(this.user).subscribe(data => {
            this.wishlist = data;
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
    
    goToProductPage(productId){
        this.navCtrl.push(Product, {productId: productId});
  }
    removeFromWishList(wishId){
        this.rest.removeFromWishList(wishId).subscribe(data => {
            this.loadWishList();
        }, err=> {
            console.log(err)
         });
    }
}
