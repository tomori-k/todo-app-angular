import { Component, Input } from '@angular/core'
import { Todo } from '../../models'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'

async function getTodo(id: number): Promise<Todo> {
  // 一旦ダミーデータを返す
  return {
    id: id,
    categoryId: 1,
    title: 'Improve design',
    body: 'improve the design of the header',
    state: 0,
    updatedAt: new Date(2000, 5, 14, 12, 31, 59),
    createdAt: new Date(2000, 5, 14, 12, 31, 59),
  }
}

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss',
})
export class TodoDetailComponent {
  public todoPromise: Promise<Todo> | null = null

  @Input()
  set id(todoId: number) {
    this.todoPromise = getTodo(todoId)
  }
}
