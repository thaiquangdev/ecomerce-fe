import { MdOutlineSpeed } from 'react-icons/md';
import { BsDatabase } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { BsCart2 } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';

export const dataSidebar = [
  {
    id: 1,
    title: 'Dashboard',
    icon: MdOutlineSpeed,
    url: '/',
    children: null,
  },
  {
    id: 2,
    title: 'Catalog',
    icon: BsDatabase,
    url: null,
    children: [
      { id: 21, title: 'Products List', url: '/dashboard/products' },
      { id: 22, title: 'Product', url: '/dashboard/product' },
      { id: 23, title: 'Categories List', url: '/dashboard/categories' },
      { id: 24, title: 'Category', url: '/dashboard/category' },
      { id: 25, title: 'Brands List', url: '/dashboard/brands' },
      { id: 26, title: 'Brand', url: '/dashboard/brand' },
    ],
  },
  {
    id: 3,
    title: 'Customers',
    icon: FiUser,
    url: null,
    children: [
      { id: 31, title: 'Customers List', url: '/dashboard/customers' },
      { id: 32, title: 'Customer', url: '/dashboard/customer' },
    ],
  },
  {
    id: 4,
    title: 'Orders',
    icon: BsCart2,
    url: null,
    children: [
      { id: 41, title: 'Orders List', url: '/dashboard/orders' },
      { id: 42, title: 'Order detail', url: '/dashboard/cart-detail' },
    ],
  },
  {
    id: 5,
    title: 'Marketing',
    icon: IoMdHeartEmpty,
    url: null,
    children: [
      { id: 51, title: 'Coupons List', url: '/dashboard/coupons' },
      { id: 52, title: 'Coupon', url: '/dashboard/coupon' },
    ],
  },
  {
    id: 6,
    title: 'Calendar',
    icon: FaCalendarAlt,
    url: '/dashboard/calendar',
    children: null,
  },
  {
    id: 7,
    title: 'Analytics',
    icon: SiGoogleanalytics,
    url: '/dashboard/analytics',
    children: null,
  },
];
