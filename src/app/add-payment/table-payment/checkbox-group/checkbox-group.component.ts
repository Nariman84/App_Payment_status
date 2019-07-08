import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[checkbox-group]',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {

  @Input() data:{name: string, cost: number, id:number};

  months: string[] = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
  amountForPayment:number = 0;

  @Output() onPaymentChange = new EventEmitter<number>();
  @Output() onDeleteButtonClick = new EventEmitter();

  // Расчет стоимости за месяц
  onCalcCostPerMonth(isChecked:boolean, item:any, idxMonth:number):void {
    let numberOfDays:number = this.getDaysInMonth(idxMonth);
    let amountPerMonth:number = numberOfDays * item.cost;
    if (isChecked) {
      this.amountForPayment += amountPerMonth;
    } else {
      this.amountForPayment -= amountPerMonth;
    }

    this.onPaymentChange.emit(this.amountForPayment);
  }

  // Расчет количества дней в месяце на текущий год
  getDaysInMonth(idxMonth:number):number {
    let yearNow:number = new Date().getFullYear();
    return new Date(yearNow, idxMonth, 0).getDate();
  }

  // Удаление платежа из списка
  deleteRow():void {
    this.onDeleteButtonClick.emit();
  }

  constructor() { }

  ngOnInit() {  }

}
