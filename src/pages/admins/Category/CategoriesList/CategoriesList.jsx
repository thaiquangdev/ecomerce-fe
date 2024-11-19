import DashboardLayout from '@components/admin/Layout/Layout';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import DataTable from '@components/admin/DataTable/DataTable';
import { useEffect, useState } from 'react';
import { getCategories } from '@/apis/categoryService';

const CategoriesList = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    tableContainer,
    searchBar,
  } = styles;
  const [categories, setCategories] = useState([]);
  const columns = [
    { header: 'ID', field: 'id' },
    { header: 'Category Name', field: 'categoryName' },
    { header: 'Slug', field: 'categorySlug' },
    { header: 'Active', field: 'isActive' },
  ];

  useEffect(() => {
    getCategories().then(
      (res) => {
        setCategories(res.categories);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <DashboardLayout>
          <div className={layout}>
            <div className={titleSection}>
              <h1>Brands</h1>
              <Button content={'New Category'} />
            </div>
            <div className={tableContainer}>
              <div className={searchBar}>
                <input placeholder='Start typing to search for categories' />
              </div>
              <DataTable columns={columns} data={categories} />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default CategoriesList;
