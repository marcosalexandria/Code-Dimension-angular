import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create-product',
    //Normal
    //component: CreateComponent,

    //carregando a pagina apenas quando abrem ela, lazy load
    loadComponent: () => import('./features/create/create.component').then(m => m.CreateComponent),
  },
  {
    path: 'edit-product',
    loadComponent: () => import('./features/edit/edit.component').then(m => m.EditComponent),
  }
];
