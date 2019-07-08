import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Input, Output, EventEmitter, Component } from "@angular/core";

import { TablePaymentComponent } from './table-payment.component';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'checkbox-group',
  template: ''
})
class MockCheckboxGroupComponent {
  @Input() data:{name: string, cost: number, id:number};
  @Output() onPaymentChange = new EventEmitter<number>();
  @Output() onDeleteButtonClick = new EventEmitter();
}

@Component({
  selector: 'total-amount',
  template: ''
})
class MockTotalAmountComponent {
  @Input() totalAmount:number;
}

describe('TablePaymentComponent', () => {
  let component: TablePaymentComponent;
  let fixture: ComponentFixture<TablePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TablePaymentComponent,
        MockCheckboxGroupComponent,
        MockTotalAmountComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Создание компонента TablePaymentComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Класс "table-heading_month" есть только у колонок для отображения месяца', () => {
    expect(fixture.debugElement.queryAll(By.css('th'))[0].nativeElement.classList.contains('table-heading_month')).toBe(false);
    expect(fixture.debugElement.queryAll(By.css('th'))[1].nativeElement.classList.contains('table-heading_month')).toBe(false);
    expect(fixture.debugElement.queryAll(By.css('th'))[14].nativeElement.classList.contains('table-heading_month')).toBe(false);
    expect(fixture.debugElement.queryAll(By.css('th'))[2].nativeElement.classList.contains('table-heading_month')).toBe(true);
  });

  it('Генерируется правильный шаблон', () => {
    component.inputData = [
      {}, {}
    ] as any;
    
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.table-body_row')).length).toBe(2);
  });

  it('totalAmont выводит сумму всех платежей', () => {
    component.paymentCosts = {
      1: 100,
      2: 200
    };
    
    expect(component.totalAmount).toBe(300);
  });


  it('onPaymentChanged() изменяет стоимость платежа', () => {
    component.onPaymentChanged(1, 100);

    expect(component.paymentCosts).toEqual({1: 100});
  });

  it('onRowDelete() удаляет платеж из списка', () => {
    component.inputData = [
      { id: 1 },
      { id: 2 }
    ] as any;
    component.paymentCosts = {
      1: 100,
      2: 200
    };
    component.onRowDelete({ id: 1 });

    expect(component.inputData).toEqual([{id: 2}] as any);
    expect(component.paymentCosts).toEqual({2: 200});
  });
});
