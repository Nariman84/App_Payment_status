import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmountComponent } from './total-amount.component';
import { By } from '@angular/platform-browser';


describe('TotalAmountComponent', () => {
  let component: TotalAmountComponent;
  let fixture: ComponentFixture<TotalAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Создание компонента TotalAmountComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Генерируется правильный шаблон', () => {
    component.totalAmount = 1000;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.total-amount__value')).nativeElement.textContent).toBe('1000');
  });
});
