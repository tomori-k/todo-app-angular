import { Injectable } from '@angular/core'
import { Todo, TodoCreate, TodoUpdate } from '../models'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public async getTodo(todoId: number): Promise<Todo> {
    const response = await fetch(`http://localhost:9000/todo/${todoId}`, {
      method: 'GET',
    })
    const todo = await response.json()
    return todo
  }

  public async getAll(): Promise<Todo[]> {
    const response = await fetch('http://localhost:9000/todo/list', {
      method: 'GET',
    })
    const todoList = await response.json()
    return todoList
  }

  public async create(todo: TodoCreate) {
    await fetch('http://localhost:9000/todo', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async update(todo: TodoUpdate) {
    await fetch('http://localhost:9000/todo', {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async remove(id: number) {
    await fetch(`http://localhost:9000/todo/${id}`, {
      method: 'DELETE',
    })
  }
}
