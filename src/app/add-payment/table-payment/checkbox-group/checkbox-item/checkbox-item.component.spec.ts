import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxItemComponent } from './checkbox-item.component';

describe('CheckboxItemComponent', () => {
  let component: CheckboxItemComponent;
  let fixture: ComponentFixture<CheckboxItemComponent>;

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
