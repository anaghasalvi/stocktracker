import { Component, OnInit } from '@angular/core';

import { StockdataService } from '../stockdata.service';
//import {Observable} from 'rxjs/Rx';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subscription: Subscription;
statusText: string;
  public showPopup: boolean;
  chart = [];
  public dataChart: [];
  public stockCompanies: object[] = [
    {
      "id": "694653"
      , "t": "GOOG"
      , "e": "NASDAQ"
      , "l": "581.84"
      , "l_cur": "581.84"
      , "s": "0"
      , "ltt": "4:00PM EDT"
      , "lt": "Mar 30, 4:00PM EDT"
      , "c": "+0.11"
      , "cp": "0.02"
      , "ccol": "chg"

    }
  ];
  public stockDataSet;
  constructor(private _stockService: StockdataService) { }

  ngOnInit() {
    this.subscription = timer(0, 15000).pipe(
      switchMap(() => this._stockService.checkdata())
    ).subscribe(result => this.stockDataSet = result);
    
    console.log(this.stockDataSet);
  }

  onClose(popupFlag: boolean) {
    this.showPopup = popupFlag;
  }
  onselectCompany(selection: string) {
   var  selectionObj={};
   selectionObj["e"] = selection; 
    this.stockCompanies.push(selectionObj);   
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
