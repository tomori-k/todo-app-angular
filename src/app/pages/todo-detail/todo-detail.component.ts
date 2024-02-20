import { Component, Input } from '@angular/core'
import { Todo } from '../../models'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { TodoService } from '../../services/todo-service'
import { toInt } from '../../utils/converter'

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss',
})
export class TodoDetailComponent {
  public todoPromise: Promise<Todo> | null = null

  constructor(private readonly todoService: TodoService) {}

  @Input()
  set id(todoId: string) {
    this.todoPromise = this.todoService.getTodo(toInt(todoId))
  }
}
