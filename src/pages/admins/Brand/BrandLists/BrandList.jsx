import DashboardLayout from '@components/admin/Layout/Layout';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import Button from '@components/Button/Button';
import DataTable from '@components/admin/DataTable/DataTable';
import { useEffect, useState } from 'react';
import { getBrands } from '@/apis/brandService';
import styles from './styles.module.scss';

const BrandList = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    tableContainer,
    searchBar,
  } = styles;
  const [brands, setBrands] = useState([]);
  const columns = [
    { header: 'ID', field: 'id' },
    { header: 'Brand Name', field: 'brandName' },
    { header: 'Slug', field: 'brandSlug' },
    { header: 'Active', field: 'isActive' },
  ];

  useEffect(() => {
    getBrands().then(
      (res) => {
        setBrands(res.brands);
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
              <Button content={'New Brand'} />
            </div>
            <div className={tableContainer}>
              <div className={searchBar}>
                <input placeholder='Start typing to search for brands' />
              </div>
              <DataTable columns={columns} data={brands} />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default BrandList;
