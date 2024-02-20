import { Component, Input } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Todo, TodoCategory, TodoState, TodoUpdate } from '../../models'
import { CommonModule } from '@angular/common'
import { TodoService } from '../../services/todo-service'
import { toInt } from '../../utils/converter'
import { TodoCategoryService } from '../../services/todo-category-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss',
})
export class TodoEditComponent {
  public readonly formGroup = new FormGroup({
    id: new FormControl<number | null>(null, Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    category: new FormControl(0),
    state: new FormControl<TodoState | null>(0),
  })

  public categoryListPromise: Promise<TodoCategory[]> | null = null

  constructor(
    private readonly router: Router,
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

  private get formId() {
    return this.formGroup.controls.id
  }

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

    this.formId.setValue(todo.id)
    this.formTitle.setValue(todo.title)
    this.formBody.setValue(todo.body)
    this.formCategory.setValue(todo.categoryId)
    this.formState.setValue(todo.state)
  }

  private getFormData(): TodoUpdate | null {
    if (this.formGroup.invalid) {
      return null
    }

    return {
      id: this.formId.value!,
      categoryId: this.formCategory.value!,
      title: this.formTitle.value!,
      body: this.formBody.value!,
      state: this.formState.value!,
    }
  }

  // event handlers

  public async onEditClicked() {
    const formData = this.getFormData()

    if (formData == null) {
      return
    }

    await this.todoService.update(formData)

    this.router.navigate(['/list'])
  }
}
