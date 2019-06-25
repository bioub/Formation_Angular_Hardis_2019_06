import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: Todo[] = [];
  @Output() remove = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
