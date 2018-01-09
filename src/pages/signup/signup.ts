import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { RestProvider } from '../../providers/rest/rest';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})

export class SignUp {    
    
    signUpForm : FormGroup;
    name : AbstractControl;
    emailID : AbstractControl;
    password : AbstractControl;
    confirmPassword : AbstractControl;
    
  constructor(public navCtrl: NavController,
            public restProvider: RestProvider,
            public formBuilder : FormBuilder,
            private alertCtrl: AlertController
 
              ) { 
      
      this.signUpForm=formBuilder.group({
        name:['',Validators.compose([ Validators.required, Validators.maxLength(25), Validators.minLength(6) ]) ],
        emailID:['',Validators.compose([ Validators.required, Validators.maxLength(25), Validators.minLength(6) ]) ],
        password:['',Validators.compose([ Validators.required,Validators.minLength(6) ,Validators.maxLength(25)]) ],
        confirmPassword:['',Validators.compose([ Validators.required] ) ]
        });
      
        this.name = this.signUpForm.controls['name'];
        this.emailID = this.signUpForm.controls['emailID'];
        this.password = this.signUpForm.controls['password'];
        this.confirmPassword = this.signUpForm.controls['confirmPassword'];
      
  }
    saveAndLogin(){
        if (this.password.value==this.confirmPassword.value){
        console.log(this.name.value);
        console.log(this.emailID.value);
        console.log(this.password.value);
        console.log(this.confirmPassword.value);
        this.navCtrl.push(Login);
        }
        else {
            let alert = this.alertCtrl.create({
    title: 'Mis-Match',
    subTitle: 'Re-enter Password and Confirm Password',
    buttons: ['Dismiss']
    });
  alert.present();
            this.password.reset();
            this.confirmPassword.reset();
        }
  }
}
