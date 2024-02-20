import { Injectable } from '@angular/core'
import { TodoCategory } from '../models'

@Injectable({
  providedIn: 'root',
})
export class TodoCategoryService {
  private readonly categories: TodoCategory[] = [
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

  public async getAll(): Promise<TodoCategory[]> {
    return this.categories
  }
}
