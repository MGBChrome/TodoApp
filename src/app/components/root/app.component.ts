import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<TodoItem> = [];

  title = 'TODO Liste';

  setNewItem(item: TodoItem) {
    this.todos.push(item);
  }

  itemsDeleted(todos: Array<TodoItem>) {
    this.todos = todos;
  }
}

export interface TodoItem {
  id: number;
  todoName: string;
  todo: string;
}
