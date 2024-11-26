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
  },
  {
    id: 2,
    title: 'Catalog',
    icon: BsDatabase,
    children: [
      { id: 1, title: 'Products List', url: '/products' },
      { id: 2, title: 'Product', url: '/product-detail' },
      { id: 3, title: 'Categories List', url: '/categories' },
      { id: 4, title: 'Category', url: '/category' },
      { id: 5, title: 'Brands List', url: '/brands' },
      { id: 6, title: 'Brand', url: '/brand' },
    ],
  },
  {
    id: 3,
    title: 'Customers',
    icon: FiUser,
    children: [
      { id: 1, title: 'Customers List', url: '/customers' },
      { id: 2, title: 'Customer', url: '/customer-detail' },
    ],
  },
  {
    id: 4,
    title: 'Carts',
    icon: BsCart2,
    children: [
      { id: 1, title: 'Carts List', url: '/carts' },
      { id: 2, title: 'Cart detail', url: '/cart-detail' },
    ],
  },
  {
    id: 5,
    title: 'Marketing',
    icon: IoMdHeartEmpty,
    children: [
      { id: 1, title: 'Coupons List' },
      { id: 2, title: 'Coupon' },
    ],
  },
  {
    id: 6,
    title: 'Calendar',
    icon: FaCalendarAlt,
  },
  {
    id: 7,
    title: 'Analytics',
    icon: SiGoogleanalytics,
  },
];
