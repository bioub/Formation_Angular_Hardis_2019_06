import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [{
    id: 123,
    text: 'Acheter du pain',
    completed: true,
  }, {
    id: 456,
    text: 'Utiliser le routeur d\'Angular',
    completed: false,
  }]

  addTodo(text) {
    this.todos.push({
      id: Math.random(),
      text, // text: text
      completed: false,
    });
  }
}
