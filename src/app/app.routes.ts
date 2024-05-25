import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'attendance-list',
    loadComponent: () => import('./attendance-list/attendance-list.component'),
  },
  {
    path: 'my-games',
    loadComponent: () => import('./my-games/my-games.component'),
  },
  {
    path: 'surprise-image',
    loadComponent: () => import('./surprise-image'),
  },
];
