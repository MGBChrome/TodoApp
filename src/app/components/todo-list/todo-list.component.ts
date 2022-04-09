import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../root/app.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<TodoItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

}