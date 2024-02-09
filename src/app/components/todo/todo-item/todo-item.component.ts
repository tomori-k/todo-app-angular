import { Component, Input } from '@angular/core'
import { Todo } from '../../../models'

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input()
  todo!: Todo
}
