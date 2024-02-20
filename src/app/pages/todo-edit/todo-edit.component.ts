import { Component, Input } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Todo, TodoCategory } from '../../models'
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
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss',
})
export class TodoEditComponent {
  public readonly formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    category: new FormControl(0),
    state: new FormControl(0),
  })

  // ダミーデータ
  public readonly categories: TodoCategory[] = [
    {
      id: 1,
      name: 'frontend',
      color: '1',
      updatedAt: new Date(2021, 3, 9, 7, 48, 56),
      createdAt: new Date(2021, 3, 9, 4, 8, 57),
    },
    {
      id: 2,
      name: 'backend',
      color: '2',
      updatedAt: new Date(2021, 3, 9, 7, 48, 56),
      createdAt: new Date(2021, 3, 9, 4, 8, 57),
    },
    {
      id: 3,
      name: 'infra',
      color: '3',
      updatedAt: new Date(2021, 3, 9, 7, 48, 56),
      createdAt: new Date(2021, 3, 9, 4, 8, 57),
    },
  ]

  // path parameters

  @Input()
  set id(todoId: number) {
    this._loadTodo(todoId)
  }

  // form controls

  get formTitle() {
    return this.formGroup.controls.title
  }

  get formBody() {
    return this.formGroup.controls.body
  }

  get formCategory() {
    return this.formGroup.controls.category
  }

  get formState() {
    return this.formGroup.controls.state
  }

  private async _loadTodo(todoId: number) {
    const todo = await getTodo(todoId)

    this.formTitle.setValue(todo.title)
    this.formBody.setValue(todo.body)
    this.formCategory.setValue(todo.categoryId)
    this.formState.setValue(todo.state)
  }
}
