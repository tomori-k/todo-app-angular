export type TodoState = 0 | 1 | 2

export type Todo = {
  id: number
  categoryId: number
  title: string
  body: string
  state: TodoState
  updatedAt: Date
  createdAt: Date
}

export type TodoCreate = {
  categoryId: number
  title: string
  body: string
}

export type TodoCategory = {
  id: number
  name: string
  color: string
  updatedAt: Date
  createdAt: Date
}
