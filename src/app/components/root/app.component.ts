import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<TodoItem> = [
    {
      id: 1,
      todoName: 'test',
      todo: 'abc'
    },
    {
      id: 2,
      todoName: 'test1',
      todo: 'def'
    },
    {
      id: 3,
      todoName: 'test2',
      todo: 'ghi'
    },
    {
      id: 4,
      todoName: 'test3',
      todo: 'jkl'
    },
  ];

  title = 'das ist der titel';
}

export interface TodoItem {
  id: number;
  todoName: string;
  todo: string;
}
