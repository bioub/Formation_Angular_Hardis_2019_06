import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() todo = new Todo();
  @Output() remove = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
