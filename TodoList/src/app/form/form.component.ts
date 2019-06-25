import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
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
