import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', loadComponent: () =>
      import('@my-website/blog').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:slug', loadComponent:() =>
    import('@my-website/blog').then(m => m.BlogDetailsComponent),
  }
];
