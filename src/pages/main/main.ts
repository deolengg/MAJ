import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from "../product/product";
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class Main {
    products;
    filteredProducts;
    email;
    
  constructor(
     public navCtrl: NavController,
     public rest : RestProvider,
      public store :Storage
  ) {

  }
    
    ngOnInit() {
        this.store.get('email').then(email => {
            this.email = email;
        });
        
        this.rest.getProducts().subscribe(data => {
            this.products = data;
            this.filteredProducts = data;
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
    
    
  goToProductPage(productId){
    this.navCtrl.push(Product, {productId: productId});
  }
    
    getItems(ev) {
    // Reset items back to all of the items
    this.filteredProducts = this.products;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredProducts = this.filteredProducts.filter((item) => {
        return (item.pName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
    
}

