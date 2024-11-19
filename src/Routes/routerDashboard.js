import { lazy } from 'react';

const routerDashboard = [
  {
    path: '/dashboard',
    component: lazy(() => import('@pages/admins/Dashboard/Dashboard')),
  },
  {
    path: '/login',
    component: lazy(() => import('@pages/admins/Login/Login')),
  },
  {
    path: '/dashboard/categories',
    component: lazy(() =>
      import('@pages/admins/Category/CategoriesList/CategoriesList')
    ),
  },
  {
    path: '/dashboard/brands',
    component: lazy(() => import('@pages/admins/Brand/BrandLists/BrandList')),
  },
];

export default routerDashboard;
