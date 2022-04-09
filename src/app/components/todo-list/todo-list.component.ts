import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../root/app.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<TodoItem> = [];
  @Output() itemsDeleted = new EventEmitter<Array<TodoItem>>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(id: number) {
    this.todos = this.todos.filter((t) => {
      return t.id !== id
    });

    this.itemsDeleted.emit(this.todos);
  }
}
