import { Component } from '@angular/core'
import { Todo } from '../../models'
import { TodoListComponent } from '../../components/todo/todo-list/todo-list.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoListComponent, RouterLink],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  // テストデータ
  public readonly todoList: Todo[] = [
    {
      id: 1,
      categoryId: 1,
      title: 'Improve design',
      body: 'improve the design of the header',
      state: 0,
      updatedAt: new Date(2000, 5, 14, 12, 31, 59),
      createdAt: new Date(2000, 5, 14, 12, 31, 59),
    },
    {
      id: 2,
      categoryId: 2,
      title: 'fix Controller',
      body: 'fix Controller name',
      state: 1,
      updatedAt: new Date(2020, 7, 19, 8, 25, 34),
      createdAt: new Date(2012, 6, 3, 3, 3, 3),
    },
    {
      id: 3,
      categoryId: 3,
      title: 'Create new DB',
      body: 'Create new DB',
      state: 2,
      updatedAt: new Date(2024, 2, 9, 18, 5, 36),
      createdAt: new Date(2012, 2, 29, 7, 6, 45),
    },
  ]
}
