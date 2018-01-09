import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
    
    apiUrl = 'http://127.0.0.1:8000';
    users: any;
    constructor(public http: HttpClient) 
    {
      console.log('Hello RestProvider Provider');
    }
    addUser(data) // user registration 
    {
        return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/login', JSON.stringify(data))
        .subscribe(res => {
            resolve(res);
            }, (err) => {
            reject(err);
            });
        });
        }
        getUsers() { // fetch all users at once and validate later
            return new Promise(resolve => {
            this.http.get(this.apiUrl+'/login').subscribe(data => {
            resolve(data);
            }, err => {
        console.log(err);
        });
    });
    }
    getProducts() { // fetch all products and add to main shopping page
        return new Promise(resolve => {
        this.http.get(this.apiUrl+'/products').subscribe(data => {
        resolve(data);
        }, err => {
      console.log(err);
        });
    });
    }
}
