import { lazy } from 'react';

const router = [
  {
    path: '/',
    component: lazy(() => import('@pages/Home/Home')),
  },
  {
    path: '/shop',
    component: lazy(() => import('@pages/OutShop/OutShop')),
  },
  {
    path: '/wishlist',
    component: lazy(() => import('@pages/Wishlist/Wishlist')),
  },
  {
    path: '/product/:slug',
    component: lazy(() => import('@pages/ProductDetail/ProductDetail')),
  },
  {
    path: '/about-us',
    component: lazy(() => import('@pages/AboutUs/AboutUs')),
  },
  {
    path: '/contacts',
    component: lazy(() => import('@pages/Contacts/Contacts')),
  },
  {
    path: '/cart',
    component: lazy(() => import('@pages/Cart/Cart')),
  },
];

export default router;
