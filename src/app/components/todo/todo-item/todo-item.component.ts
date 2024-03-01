import { Component, Input } from '@angular/core'
import { Todo } from '../../../models'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input()
  todo!: Todo
}
