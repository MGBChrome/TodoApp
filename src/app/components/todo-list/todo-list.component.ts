import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../model/todoItem";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<TodoItem> = [];
  @Output() itemDeleted = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(id: number) {
    this.itemDeleted.emit(id);
  }
}
