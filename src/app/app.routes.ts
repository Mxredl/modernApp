import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home-defer',
    pathMatch: 'full',
  },
  {
    path: 'details/:id', // <-- Add the :id parameter
    loadComponent: () =>
      import('./details/details.page').then((m) => m.DetailsPage),
  },
];
