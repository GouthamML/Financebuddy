import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { risk } from '../risk/risk';
import { MCSService } from '../../providers/mcsService'
import { HomePage } from '../home/home';


import { requestIonicCallback } from '../../../node_modules/ionic-angular/umd/util/util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class login {
  public loginData: { username?: string, password?: string } = {};

  constructor(public mcsService:MCSService, public navCtrl: NavController) {
    this.loginData = {
      username : 'mcs-demo_user05',
      password : 'tumid@7ChoSen'
    }
    //this.navCtrl.push(risk);
  }
  doLogin() {
    
    this.mcsService.authenticate(this.loginData).subscribe(
      data => {
          console.log(data);
          
          if(data['statusCode'] = 200) {
            this.navCtrl.setRoot(HomePage,{username:this.loginData.username});
            
          }
        },
      err => {
          console.log(err);
        
        });
  }
  

  }

