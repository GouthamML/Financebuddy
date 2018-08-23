import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { risk } from '../risk/risk';
import { requestIonicCallback } from '../../../node_modules/ionic-angular/umd/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //this.navCtrl.push(risk);
  }
  
  open_risk(riskvalue) {
    localStorage.setItem('moneyRange',riskvalue)
    this.navCtrl.push(risk);
  }
}
