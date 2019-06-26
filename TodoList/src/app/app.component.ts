import { Component } from "@angular/core";
import { Todo } from "./todo";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  todos: Todo[] = [
    {
      id: 123,
      text: "Acheter du pain",
      completed: true
    },
    {
      id: 456,
      text: "Utiliser le routeur d'Angular",
      completed: false
    }
  ];

  addTodo(text: string) {
    // this.todos.push({
    //   id: Math.random(),
    //   text, // text: text
    //   completed: false,
    // });
    this.todos = [
      ...this.todos,
      {
        id: Math.random(),
        text, // text: text
        completed: false
      }
    ];
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
