export type TodoState = 0 | 1 | 2

export type Todo = {
  id: number
  category: TodoCategory | null
  title: string
  body: string
  state: TodoState
}

export type TodoCreate = {
  categoryId: number
  title: string
  body: string
}

export type TodoUpdate = {
  id: number
  categoryId: number
  title: string
  body: string
  state: TodoState
}

export type TodoCategory = {
  id: number
  name: string
  color: string
}
