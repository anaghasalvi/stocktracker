import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { HttpClientModule } from '@angular/common/http';
import { StockGraphComponent } from './stock-graph/stock-graph.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddStockComponent,
    StockGraphComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
