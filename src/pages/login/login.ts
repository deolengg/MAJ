import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUp } from '../signup/signup';
import { Main } from '../main/main';
import { RestProvider } from '../../providers/rest/rest';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {
    
    loginForm : FormGroup;
    emailID : AbstractControl;
    password : AbstractControl;
    
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public formBuilder : FormBuilder,
    public alertCtrl : AlertController 
    
    ) {
      console.log(restProvider.getUsers());
        
        this.loginForm=formBuilder.group({
        emailID:['',Validators.compose([ Validators.required, Validators.maxLength(25), Validators.minLength(5) ]) ],
        password:['',Validators.compose([ Validators.required,Validators.minLength(5) ,Validators.maxLength(25)]) ]
        });
        
        this.emailID = this.loginForm.controls['emailID'];
        this.password = this.loginForm.controls['password'];
  }
  goToSingUp(){
      
    this.navCtrl.push(SignUp);
  }
  goToMainPage(){
      if (this.emailID.value=="admin" && this.password.value=="admin"){
      console.log(this.emailID.value);
      console.log(this.password.value);
        this.navCtrl.push(Main);
        this.navCtrl.setRoot(Main);
      }
      else {
          let alert = this.alertCtrl.create({
    title: 'Authentication Failed',
    subTitle: 'Try Again with Email and Password',
    buttons: ['Okay']
    });
  alert.present();
            this.emailID.reset();
            this.password.reset();
      }
  }
}
