import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { requestIonicCallback } from '../../../node_modules/ionic-angular/umd/util/util';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { urlToNavGroupStrings } from '../../../node_modules/ionic-angular/umd/navigation/url-serializer';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic bGlzYS5qb25lczp0SVR1bGFyQDlMYVJr',
    

  })
};
var persons: { [id: string] : string; } = {};
persons = { "TBL": "Treasury Bills", "CBF": "Corporate Bond Funds","MF":"Mutual Funds","CD":"Certificate of Deposit","P2P":"Pier to Pier","IPO":"IPO","TN":"Treasury Notes","GBF":"Government Bond Funds","MMA":"Money Market Account","MBF":"Muncipal Bond Funds","TBD":"Treasury Bonds","REIT":"Real Estate Investments Trust","DPS":"Dividend Paying Stocks","TIPS":"Treasury Inflation Protected Securities","MMF":"Money Market Funds",};


@Component({
    selector: 'doughnut-chart-demo',
    templateUrl: 'charts.html'
  })
  export class charts{
    invesments: Observable<any>;
    public invest:string;
    public interest:any;
    public full_name:any;
    public url1:string = "https://BlrICSInstance-gse00015267.uscom-east-1.oraclecloud.com:443/ic/api/integration/v1/flows/rest/GETINVESTMENTDB_REVISED/1.0/investment?inv=[inv-value]&amount=[amount-value]&years=[years-value]"
    
  // making GET to the API
  public n:number = 999999999;
      // Doughnut
      while (n) {
        n--;
      }

  public doughnutChartLabels:string[] = ['Invested','ROI'];

  // public ten:number = 100000



  public doughnutChartData:number[] = [100, 0];
  
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
    constructor(public navCtrl: NavController,  public httpClient: HttpClient) {
      //this.navCtrl.push(risk);
      let moneyRange = localStorage.getItem('moneyRange');
      let riskValue = localStorage.getItem('riskValue');
      let yearValue = localStorage.getItem('yearValue');
     
      console.log(this.httpClient.get(this.url1,httpOptions));
      this.invesments = this.httpClient.get('https://apex.oracle.com/pls/apex/db_jeffy/mobile/investment/'+riskValue+'/'+moneyRange+'/'+yearValue);
    this.invesments.subscribe(data => {
       this.invest = data['items']['0']['decision'];
      this.interest = data['items']['0']['interestrate'];
      this.doughnutChartData = [100-Number(this.interest),Number(this.interest)];
      this.full_name =  persons[this.invest];
      console.log(persons[this.invest]);


      localStorage.setItem('interestValue',this.interest);
    })

    // This is ICS
    // this.invesments = this.httpClient.get("https://BlrICSInstance-gse00015267.uscom-east-1.oraclecloud.com:443/ic/api/integration/v1/flows/rest/GETINVESTMENTDB_REVISED/1.0/investment?inv="+riskValue+"&amount="+moneyRange+"&years="+yearValue, httpOptions);
    // this.invesments.subscribe(data => {
    //      this.invest = data['items']['0']['decision'];
    //     this.interest = data['items']['0']['interestrate'];
    //     this.full_name =  persons[this.invest];
    //     console.log(persons[this.invest]);
    // },err => {
    //   console.log(err);
    // })

    }}