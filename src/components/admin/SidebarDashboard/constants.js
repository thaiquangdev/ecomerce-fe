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
  },
  {
    id: 2,
    title: 'Catalog',
    icon: BsDatabase,
    children: [
      { id: 1, title: 'Products List' },
      { id: 2, title: 'Product' },
      { id: 3, title: 'Categories List' },
      { id: 4, title: 'Category' },
      { id: 5, title: 'Brands List' },
      { id: 6, title: 'Brand' },
    ],
  },
  {
    id: 3,
    title: 'Customers',
    icon: FiUser,
    children: [
      { id: 1, title: 'Customers List' },
      { id: 2, title: 'Customer' },
    ],
  },
  {
    id: 4,
    title: 'Carts',
    icon: BsCart2,
    children: [
      { id: 1, title: 'Carts List' },
      { id: 2, title: 'Cart detail' },
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
