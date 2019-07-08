import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxItemComponent } from './checkbox-item.component';

describe('CheckboxItemComponent', () => {
  let component: CheckboxItemComponent;
  let fixture: ComponentFixture<CheckboxItemComponent>;
  // let inputCheckbox: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Создание компонента CheckboxItemComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('Клик по чекбоксу должен менять значение', () => {
  //   inputCheckbox = fixture.debugElement.nativeElement.querySelector('.cell_checkbox');
  //   expect(inputCheckbox.checked).toBeFalsy(); // по-умолчанию не кликнут
  //   inputCheckbox.change();
  //   fixture.detectChanges();
  //   expect(inputCheckbox.checked).toBeTruthy(); // после клика стоит галочка
  // });

  it('onChanged() пробрасывает наверх выбранный месяц', () => {
    let isChecked;
    component.onCheckedChange.subscribe(_isChecked => isChecked = _isChecked);
    component.onChanged({
      target: {
        checked: true
      }
    } as any);

    expect(isChecked).toBe(true);
  });
});
