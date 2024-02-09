import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TodoPageComponent } from './pages/todo-page/todo-page.component'
import { TodoCreateComponent } from './pages/todo-create/todo-create.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'list',
    component: TodoPageComponent,
    title: 'TODO',
  },
  {
    path: 'create',
    component: TodoCreateComponent,
    title: 'Add TODO',
  },
]
