import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../model/todoItem";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() addNewItem = new EventEmitter<TodoItem>()

  nameInput: string = '';
  todoInput: string = '';

  private elementId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  saveFormInput(): void {
    let item: TodoItem = this.createNewItem(this.nameInput, this.todoInput);
    this.addNewItem.emit(item);
  }

  createNewItem(name: string, todo: string): TodoItem {
    let newItem = {
      id: this.elementId,
      todoName: name,
      todo: todo
    };
    this.elementId++;
    return newItem;
  }
}
