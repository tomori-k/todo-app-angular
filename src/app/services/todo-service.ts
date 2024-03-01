import { Injectable } from '@angular/core'
import { Todo, TodoCreate, TodoUpdate } from '../models'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public async getTodo(todoId: number): Promise<Todo> {
    const response = await fetch(`${environment.apiUrl}/todo/${todoId}`, {
      method: 'GET',
    })
    const todo = await response.json()
    return todo
  }

  public async getAll(): Promise<Todo[]> {
    const response = await fetch(`${environment.apiUrl}/todo/list`, {
      method: 'GET',
    })
    const todoList = await response.json()
    return todoList
  }

  public async create(todo: TodoCreate) {
    await fetch(`${environment.apiUrl}/todo`, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async update(todo: TodoUpdate) {
    await fetch(`${environment.apiUrl}/todo`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async remove(id: number) {
    await fetch(`${environment.apiUrl}/todo/${id}`, {
      method: 'DELETE',
    })
  }
}
