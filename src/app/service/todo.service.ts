import { Injectable } from '@angular/core';
import {TodoItem} from "../model/todoItem";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Array<TodoItem> = [];

  constructor() { }

  public addItem(item: TodoItem) {
    this.todos.push(item);
  }

  public deleteItem(elementId: number): void {
    this.todos = this.todos.filter((t) => {
      return t.id !== elementId
    });
  }
}
