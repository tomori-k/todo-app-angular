import { Injectable } from '@angular/core'
import { Todo, TodoCreate, TodoUpdate } from '../models'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // テストデータ
  public readonly todoList: Todo[] = [
    {
      id: 1,
      categoryId: 1,
      title: 'Improve design',
      body: 'improve the design of the header',
      state: 0,
      updatedAt: new Date(2000, 5, 14, 12, 31, 59),
      createdAt: new Date(2000, 5, 14, 12, 31, 59),
    },
    {
      id: 2,
      categoryId: 2,
      title: 'fix Controller',
      body: 'fix Controller name',
      state: 1,
      updatedAt: new Date(2020, 7, 19, 8, 25, 34),
      createdAt: new Date(2012, 6, 3, 3, 3, 3),
    },
    {
      id: 3,
      categoryId: 3,
      title: 'Create new DB',
      body: 'Create new DB',
      state: 2,
      updatedAt: new Date(2024, 2, 9, 18, 5, 36),
      createdAt: new Date(2012, 2, 29, 7, 6, 45),
    },
  ]

  public async getTodo(todoId: number): Promise<Todo> {
    const todo = this.todoList.find((todo) => todo.id === todoId)
    if (todo == null) throw new Error('Todo not found')
    return todo
  }

  public async getAll(): Promise<Todo[]> {
    return this.todoList
  }

  public async create(todo: TodoCreate) {
    const timestamp = new Date()
    this.todoList.push({
      ...todo,
      id: this.todoList.length + 1,
      state: 0,
      updatedAt: timestamp,
      createdAt: timestamp,
    })
  }

  public async update(todo: TodoUpdate) {
    const idx = this.todoList.findIndex((t) => t.id === todo.id)
    this.todoList[idx] = {
      ...this.todoList[idx],
      ...todo,
    }
  }

  public async remove(id: number) {
    const idx = this.todoList.findIndex((t) => t.id === id)
    this.todoList.splice(idx, 1)
  }
}
