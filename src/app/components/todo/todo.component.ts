import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../../model/todoItem";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'TODO Liste';

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  setNewItem(item: TodoItem) {
    this.todoService.addItem(item);
  }

  itemDeleted(elementId: number) {
    this.todoService.deleteItem(elementId);
  }
}
