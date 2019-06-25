import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit {

  text = '';
  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addTodo(event: Event) {
    event.preventDefault();
    this.textChange.emit(this.text);
  }

}
