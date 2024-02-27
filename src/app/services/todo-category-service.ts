import { Injectable } from '@angular/core'
import { TodoCategory } from '../models'

@Injectable({
  providedIn: 'root',
})
export class TodoCategoryService {
  public async getAll(): Promise<TodoCategory[]> {
    const response = await fetch('http://localhost:9000/todo-category/list', {
      method: 'GET',
    })
    const todoCategoryList = await response.json()
    return todoCategoryList
  }
}
