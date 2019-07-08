import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, EventEmitter, Output, Component, DebugElement } from '@angular/core';

import { CheckboxGroupComponent } from './checkbox-group.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'checkbox-item',
  template: ''
})
class MockCheckboxItemComponent {
  @Output() onCheckedChange = new EventEmitter<boolean>();
}

describe('CheckboxGroupComponent', () => {
  let component: CheckboxGroupComponent;
  let fixture: ComponentFixture<CheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxGroupComponent, MockCheckboxItemComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Создание компонента CheckboxGroupComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('getDaysInMonth() расчитывает количество дней в месяце', () => {
    it('Февраль (номер месяца - 2) на текущий год должен вернуть 28', () => {
      expect(component.getDaysInMonth(2)).toBe(28);
    });
  
    it('Май (номер месяца - 7) на текущий год должен вернуть 31', () => {
      expect(component.getDaysInMonth(7)).toBe(31);
    });
  
    it('Август (номер месяца - 8) на текущий год должен вернуть 31', () => {
      expect(component.getDaysInMonth(8)).toBe(31);
    });

    it('Ноябрь (номер месяца - 11) на текущий год должен вернуть 30', () => {
      expect(component.getDaysInMonth(11)).toBe(30);
    });
  });

  it('Генерируется правильный шаблон', () => {
    component.data = {
      name: "Интернет",
      cost: 100,
      id: 1
    };
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.table-body_name-payment')).nativeElement.textContent).toBe("Интернет");
    expect(fixture.debugElement.query(By.css('.table-body_cost')).nativeElement.textContent).toBe("100");
    expect(fixture.debugElement.queryAll(By.css('.table-body_month')).length).toBe(12);
  });

  it('deleteRow() бросает событие наверх', () => {
    let wasDeleted = false;
    component.onDeleteButtonClick.subscribe(() => wasDeleted = true);
    component.deleteRow();

    expect(wasDeleted).toBe(true);
  });

  describe('onCalcCostPerMonth', () => {
    it('Инкрементирует сумму и пробрасывает ее наверх', () => {
      let amount;
      component.onPaymentChange.subscribe(newAmount => amount = newAmount);
      component.onCalcCostPerMonth(true, {cost: 100} as any, 5);

      expect(component.amountForPayment).toBe(3100);
      expect(amount).toBe(3100);
    });

    it('Декрементирует сумму, когда месяц не выбран', () => {
      component.amountForPayment = 4100;
      component.onCalcCostPerMonth(false, {cost: 100} as any, 5);

      expect(component.amountForPayment).toBe(1000);
    });
  });
});