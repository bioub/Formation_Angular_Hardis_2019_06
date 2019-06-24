import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() items = [];
  @Input() selected = '';
  @Output() selectedChange = new EventEmitter<string>();

  handleClick(selected) {
    this.selectedChange.emit(selected);
  }

}
