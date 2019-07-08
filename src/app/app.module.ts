import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { TablePaymentComponent } from './add-payment/table-payment/table-payment.component';
import { TotalAmountComponent } from './add-payment/table-payment/total-amount/total-amount.component';
import { CheckboxGroupComponent } from './add-payment/table-payment/checkbox-group/checkbox-group.component';
import { CheckboxItemComponent } from './add-payment/table-payment/checkbox-group/checkbox-item/checkbox-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPaymentComponent,
    TablePaymentComponent,
    TotalAmountComponent,
    CheckboxGroupComponent,
    CheckboxItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
