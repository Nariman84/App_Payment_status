import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';

import { AddPaymentComponent } from './add-payment.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'table-payment',
  template: ''
})
class MockTablePaymentComponent {
  @Input() inputData: Array<{name: string, cost: number, id:number}>;
}

describe('AddPaymentComponent', () => {
  let component: AddPaymentComponent;
  let fixture: ComponentFixture<AddPaymentComponent>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaymentComponent, MockTablePaymentComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('Создание компонента AddPaymentComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Кнопка "Добавить" (класс btn-add-payment)', () => {
    it('Кнопка не активна, если оба поля заполнены не валидно', () => {
      component.isNameValid = jasmine.createSpy().and.returnValue(false);
      component.isCostValid = jasmine.createSpy().and.returnValue(false);

      expect(component.isAddButtonDisabled()).toBe(true);
    });
  
    it('Кнопка не активна, если поле "Стоимость" заполнено не валидно', () => {
      component.isNameValid = jasmine.createSpy().and.returnValue(true);
      component.isCostValid = jasmine.createSpy().and.returnValue(false);

      expect(component.isAddButtonDisabled()).toBe(true);
    });
  
    it('Кнопка не активна, если поле "Наименование платежа" заполнено не валидно', () => {
      component.isNameValid = jasmine.createSpy().and.returnValue(false);
      component.isCostValid = jasmine.createSpy().and.returnValue(true);

      expect(component.isAddButtonDisabled()).toBe(true);
    });
  
    it('Кнопка активна, если оба поля заполнены валидно', () => {
      component.isNameValid = jasmine.createSpy().and.returnValue(true);
      component.isCostValid = jasmine.createSpy().and.returnValue(true);

      expect(component.isAddButtonDisabled()).toBe(false);
    });

    it(`addPaymentInTable() добавляет объект {name: 'Интернет', cost: '15', id: 1}`, () => {
      component.namePayment = 'Интернет';
      component.costPayment = '15';
      component.id = 1;
  
      let AddButton = fixture.debugElement.query(By.css(".btn-add-payment"));
      AddButton.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.inputData).toContain({name: 'Интернет', cost: '15', id: 1});
    });
  });

  describe('Поле "Наименование платежа" (класс "name-payment")', () => {
    it('Значение поля валидно', () => {
      component.namePayment = '  Название платежа  ';

      expect(component.isNameValid()).toBeTruthy();
    });
  
    it('Поле не заполнено', () => {
      component.namePayment = '';

      expect(component.isNameValid()).toBeFalsy();
    });
  });

  describe('Поле "Стоимость" (класс "cost-payment")', () => {
    it('Значения больше 0 валидны', () => {
      component.costPayment = '20';

      expect(component.isCostValid()).toBeTruthy();
    });
  
    it('Значение равное 0 валидно', () => {
      component.costPayment = '0';

      expect(component.isCostValid()).toBeTruthy();
    });
  
    it('Значения меньше 0 не валидны', () => {
      component.costPayment = '-10';

      expect(component.isCostValid()).toBeFalsy();
    });
    
    it('Поле не заполнено', () => {
      component.costPayment = '';
      
      expect(component.isCostValid()).toBeFalsy();
    });
  });
});
