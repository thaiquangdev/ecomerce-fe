import { lazy } from 'react';

const router = [
  {
    path: '/',
    component: lazy(() => import('@pages/public/Home/Home')),
  },
  {
    path: '/shop',
    component: lazy(() => import('@pages/public/OutShop/OutShop')),
  },
  {
    path: '/wishlist',
    component: lazy(() => import('@pages/public/Wishlist/Wishlist')),
  },
  {
    path: '/product/:slug',
    component: lazy(() => import('@pages/public/ProductDetail/ProductDetail')),
  },
  {
    path: '/about-us',
    component: lazy(() => import('@pages/public/AboutUs/AboutUs')),
  },
  {
    path: '/contacts',
    component: lazy(() => import('@pages/public/Contacts/Contacts')),
  },
  {
    path: '/cart',
    component: lazy(() => import('@pages/public/Cart/Cart')),
  },
  {
    path: '/checkout',
    component: lazy(() => import('@pages/public/Checkout/Checkout')),
  },
];

export default router;
