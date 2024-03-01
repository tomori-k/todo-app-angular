import { Component, Input } from '@angular/core'
import { Todo } from '../../../models'
import { TodoItemComponent } from '../todo-item/todo-item.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input()
  todoList!: Todo[]
}
