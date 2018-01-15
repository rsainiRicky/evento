import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Storage } from '@ionic/storage';
import { Validators, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  loginForm = new FormGroup({
    formEmail: new FormControl('',Validators.compose([Validators.required])),
    formPassword: new FormControl('',Validators.compose([Validators.required]))
  });

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,
    public loginService:LoginServiceProvider, public storage:Storage) {
  }
  dismiss(){
    this.viewCtrl.dismiss();  
  }
  register(){
    this.navCtrl.push(SignupPage);
  }
  login(){
    this.loginService.login().subscribe(res =>{
      this.storage.set('userdata', res.json())
      this.dismiss();
    })
    };
}

