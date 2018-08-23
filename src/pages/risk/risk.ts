import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { year } from '../year/year';

@Component({
  selector: 'page-home',
  templateUrl: 'risk.html'
})
export class risk {
  
  public saturation:any = 1;

  constructor(public navCtrl: NavController) {

  }
  risk_func() {
    let riskList: Array<string> = ["LRI","MRI","HRI"];
    
    console.log(this.saturation);

    localStorage.setItem('riskValue',riskList[(this.saturation)-1]);
    this.navCtrl.push(year);
  }
  sliderChange(e){
    console.log(e);
  }
  change(saturation)
  {
if(saturation=='1')
{
console.log("Low")
  }
}

}
