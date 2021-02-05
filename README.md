# Task description
#### Реализовать интерфейс добавления, удаления и редактирования платежей

Функциональность:
1. Добавление платежей; 
1. Отображение списка платежей;
1. Удаление платежей из списка;
1. Расчет общей суммы платежей.

При разработке необходимо учитывать:
1. Наименование платежа - обязательное поле;
1. Стоимость за день  - не может быть меньше 0;
1. Кнопка добавления - неактивна, если одно из полей заполнено некорректно.
1. Таблица - состоит из 15 столбцов (“Наименование платежа”, “Стоимость”, 12 месяцев и “Удалить”);
1. Расчет общей суммы платежей осуществляется умножение стоимости платежа за месяц на количество выбранных месяцев и последующим их суммированием. Общая сумма должна автоматически пересчитываться при изменении значений чекбоксов в столбцах месяцев и при удалении платежа из списка.
Необходимо учитывать, что платежи рассчитываются на текущий год и стоимость за каждый месяц будет различна, т.к. в каждом месяце различное количество дней.

Ограничения по технологиям:
1. Angular 6

Порядок оценки работы:
1. Оформление кода и архитектуры приложения;
1. Разбиение на компоненты;
1. Верстка(html, css) и визуальное оформление приложения;
1. Написание unit-тестов. Покрытие кода по функциям должно быть 100%, подсчет также необходимо реализовать.

# PaymentStatus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
