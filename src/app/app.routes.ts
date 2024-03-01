import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TodoPageComponent } from './pages/todo-page/todo-page.component'
import { TodoCreateComponent } from './pages/todo-create/todo-create.component'
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component'

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
    path: 'todo/:id',
    component: TodoDetailComponent,
    title: 'TODO Detail',
  },
  {
    path: 'create',
    component: TodoCreateComponent,
    title: 'Add TODO',
  },
  {
    path: 'edit/:id',
    component: TodoEditComponent,
    title: 'Edit TODO',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]
