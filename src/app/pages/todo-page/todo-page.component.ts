import { Component } from '@angular/core'
import { Todo } from '../../models'
import { TodoListComponent } from '../../components/todo/todo-list/todo-list.component'
import { RouterLink } from '@angular/router'
import { TodoService } from '../../services/todo-service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoListComponent, RouterLink, CommonModule],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  public todoListPromise: Promise<Todo[]> | null = null

  public constructor(private readonly todoService: TodoService) {}

  public ngOnInit() {
    this.todoListPromise = this.todoService.getAll()
  }
}
