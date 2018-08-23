
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { charts } from '../charts/charts';
import { requestIonicCallback } from '../../../node_modules/ionic-angular/umd/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'year.html'
})
export class year {

  constructor(public navCtrl: NavController) {
    //this.navCtrl.push(risk);
  } 
  open_chart(duration) {
    localStorage.setItem('yearValue',duration );
    this.navCtrl.push(charts);
  }

  
}
