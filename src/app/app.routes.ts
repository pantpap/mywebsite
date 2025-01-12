import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog',
  },
  {
    path: 'home', loadComponent: () =>
      import('@my-website/home').then(m => m.HomeComponent)
  },
  {
    path: 'blog', loadComponent: () =>
      import('@my-website/blog').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:slug', loadComponent:() =>
    import('@my-website/blog').then(m => m.BlogDetailsComponent),
  },
  {
    path: 'services', loadComponent: () =>
      import('@my-website/services').then(m => m.ServicesComponent)
  },
];
