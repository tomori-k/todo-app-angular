import { Component } from '@angular/core'
import { TodoCategory, TodoCreate } from '../../models'
import { CommonModule } from '@angular/common'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { TodoService } from '../../services/todo-service'
import { TodoCategoryService } from '../../services/todo-category-service'
import { Router } from '@angular/router'
import { toInt } from '../../utils/converter'

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.scss',
})
export class TodoCreateComponent {
  public readonly formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    category: new FormControl(''),
  })

  public categoryListPromise: Promise<TodoCategory[]> | null = null

  public constructor(
    private readonly router: Router,
    private readonly todoService: TodoService,
    private readonly todoCategoryService: TodoCategoryService
  ) {}

  public ngOnInit() {
    this.categoryListPromise = this.todoCategoryService.getAll()
  }

  // form getters

  get titleForm() {
    return this.formGroup.controls.title
  }

  get bodyForm() {
    return this.formGroup.controls.body
  }

  get categoryForm() {
    return this.formGroup.controls.category
  }

  // event handlers

  public async onCreateClicked() {
    const formData = this.getFormData()

    if (formData == null) {
      return
    }

    await this.todoService.create(formData)

    this.router.navigate(['/list'])
  }

  private getFormData(): TodoCreate | null {
    if (this.formGroup.invalid) {
      return null
    }

    return {
      categoryId: toInt(this.formGroup.value.category!),
      title: this.formGroup.value.title!,
      body: this.formGroup.value.body!,
    }
  }
}
