import {Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-payment',
  templateUrl: './table-payment.component.html',
  styleUrls: ['./table-payment.component.css']
})
export class TablePaymentComponent implements OnInit {

  @Input() inputData: Array<{name: string, cost: number, id:number}>;

  columnNames: string[] = ['Наименование платежа', 'Стоимость',
                          'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                          'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
                          'Удалить'];

  paymentCosts:{[id:number]:number} = {};

  // Получение общей стоимости платежей
  get totalAmount() {
    let totalAmount = 0;
    for (let id in this.paymentCosts) {
      totalAmount += this.paymentCosts[id];
    }
    return totalAmount;
  }

  // Добавление в объект paymentCosts общей стоимости платежа
  onPaymentChanged(paymentId:number, paymentCost:number) {
    this.paymentCosts[paymentId] = paymentCost;
  }

  // Удаление строки из таблицы платежей
  onRowDelete(rowData):void {
    for (let i = 0; i < this.inputData.length; i++) {
      if (rowData.id === this.inputData[i].id) {
        this.inputData.splice(i, 1);
        delete this.paymentCosts[rowData.id];
        break;
      }
    }
  }

  constructor() { }

  ngOnInit() { }
}