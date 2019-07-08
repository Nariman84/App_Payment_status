import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.css']
})

export class CheckboxItemComponent implements OnInit {

  constructor() {  }

  @Output() onCheckedChange = new EventEmitter<boolean>();

  onChanged(e:Event) {
    let isChecked:boolean = (e.target as HTMLInputElement).checked;
    this.onCheckedChange.emit(isChecked);
  }

  ngOnInit() {  }
}