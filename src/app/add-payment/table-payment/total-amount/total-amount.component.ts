import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {

  @Input() totalAmount:number;

  constructor() { }

  ngOnInit() {  }
}
