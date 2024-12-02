import { lazy } from 'react';

const routerDashboard = [
  {
    path: '/dashboard',
    component: lazy(() => import('@pages/admins/Dashboard/Dashboard')),
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
  {
    path: '/dashboard/products',
    component: lazy(() =>
      import('@pages/admins/Product/ProductLists/ProductList')
    ),
  },
  {
    path: '/dashboard/product/:slug',
    component: lazy(() => import('@pages/admins/Product/Product/Product')),
  },
  {
    path: '/dashboard/product',
    component: lazy(() => import('@pages/admins/Product/Product/Product')),
  },
  {
    path: '/dashboard/brand',
    component: lazy(() => import('@pages/admins/Brand/Brand/Brand')),
  },
  {
    path: '/dashboard/brand/:slug',
    component: lazy(() => import('@pages/admins/Brand/Brand/Brand')),
  },
  {
    path: '/dashboard/category',
    component: lazy(() => import('@pages/admins/Category/Category/Category')),
  },
  {
    path: '/dashboard/category/:slug',
    component: lazy(() => import('@pages/admins/Category/Category/Category')),
  },
  {
    path: '/dashboard/customers',
    component: lazy(() =>
      import('@pages/admins/Customer/CustomerList/CustomerList')
    ),
  },
  {
    path: '/dashboard/customers/:id',
    component: lazy(() =>
      import('@pages/admins/Customer/CustomerDetail/CustomerDetail')
    ),
  },
  {
    path: '/dashboard/orders',
    component: lazy(() => import('@pages/admins/Order/OrderList/OrderList')),
  },
  {
    path: '/dashboard/orders/:id',
    component: lazy(() =>
      import('@pages/admins/Order/OrderDetail/OrderDetail')
    ),
  },
];

export default routerDashboard;
