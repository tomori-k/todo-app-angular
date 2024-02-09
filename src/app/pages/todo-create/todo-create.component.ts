import { Component } from '@angular/core'
import { TodoCategory } from '../../models'
import { CommonModule } from '@angular/common'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

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
}
