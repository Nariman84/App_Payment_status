import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  namePayment:string;
  costPayment:string;
  id:number = 0;
  inputData: Array<{name:string, cost:string, id:number}> = [];

  constructor() {  }

  // Установка кнопки добавления в активное состояние
  isAddButtonDisabled():boolean {
    return !this.isNameValid() || !this.isCostValid();
  }

  // Проверка валидности поля ввода наименования платежа
  isNameValid():boolean {
    return Boolean(this.namePayment) && this.namePayment.trim().length > 0;
  }

  // Проверка валидности поля ввода стоимости
  isCostValid():boolean {
    return Boolean(this.costPayment) && Number(this.costPayment) >= 0;
  }

  // Добавление платежа в таблицу
  addPaymentInTable():void {
    this.inputData.push({ name: this.namePayment, cost: this.costPayment, id: this.id++ });
    this.namePayment = '';
    this.costPayment = '';
  }

  ngOnInit() {  }
}