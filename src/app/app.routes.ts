import { Routes } from '@angular/router';
import { MainLayaout } from './layout/main-layaout/main-layaout';
import { Dashboard } from './features/dashboard/dashboard';
import { TaskList } from './features/tasks/task-list/task-list';

export const routes: Routes = [
  {
    path: '',
    component: MainLayaout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'tareas', component: TaskList },
    ],
  },
];
