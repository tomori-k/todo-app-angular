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
import { Router } from '@angular/router'

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
    category: new FormControl(0),
  })

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

  public constructor(
    private readonly router: Router,
    private readonly todoService: TodoService
  ) {}

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
      categoryId: this.formGroup.value.category!,
      title: this.formGroup.value.title!,
      body: this.formGroup.value.body!,
    }
  }
}
