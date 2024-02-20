import { Component, Input } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Todo, TodoCategory } from '../../models'
import { CommonModule } from '@angular/common'
import { TodoService } from '../../services/todo-service'
import { toInt } from '../../utils/converter'
import { TodoCategoryService } from '../../services/todo-category-service'

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

  public categoryListPromise: Promise<TodoCategory[]> | null = null

  constructor(
    private readonly todoService: TodoService,
    private readonly todoCategoryService: TodoCategoryService
  ) {}

  public ngOnInit() {
    this.categoryListPromise = this.todoCategoryService.getAll()
  }

  // path parameters

  @Input()
  set id(todoId: string) {
    this._loadTodo(toInt(todoId))
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
    const todo = await this.todoService.getTodo(todoId)

    this.formTitle.setValue(todo.title)
    this.formBody.setValue(todo.body)
    this.formCategory.setValue(todo.categoryId)
    this.formState.setValue(todo.state)
  }
}
