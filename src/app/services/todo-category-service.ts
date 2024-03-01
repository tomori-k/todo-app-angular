import { Injectable } from '@angular/core'
import { TodoCategory } from '../models'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class TodoCategoryService {
  public async getAll(): Promise<TodoCategory[]> {
    const response = await fetch(`${environment.apiUrl}/todo-category/list`, {
      method: 'GET',
    })
    const todoCategoryList = await response.json()
    return todoCategoryList
  }
}
