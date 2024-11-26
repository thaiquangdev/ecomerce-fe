import DashboardLayout from '@components/admin/Layout/Layout';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import Button from '@components/Button/Button';
import DataTable from '@components/admin/DataTable/DataTable';
import { useEffect, useState } from 'react';
import { getBrands } from '@/apis/brandService';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Pagination from '@components/admin/Pagination/Pagination';

const BrandList = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    tableContainer,
    searchBar,
  } = styles;
  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);
  const [totalBrands, setTotalBrands] = useState(0); // Tổng số thương hiệu
  const [page, setPage] = useState(1); // Trang hiện tại
  const [limit, setLimit] = useState(8); // Số lượng bản ghi mỗi trang

  const columns = [
    { header: 'ID', field: 'id' },
    { header: 'Brand Name', field: 'brandName' },
    { header: 'Slug', field: 'brandSlug' },
    { header: 'Active', field: 'isActive' },
  ];

  console.log(setPage);

  useEffect(() => {
    // Lấy dữ liệu khi trang hoặc limit thay đổi
    getBrands({ page, limit }).then(
      (res) => {
        setBrands(res.brands);
        setTotalBrands(res.totalBrands);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [page, limit]);

  const handleNewBrandNavigate = () => {
    navigate('/dashboard/brand');
  };

  const handleEditBrandNavigate = (slug) => {
    navigate(`/dashboard/brand/${slug}`);
  };

  // Hàm xử lý sự kiện phân trang
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <DashboardLayout>
          <div className={layout}>
            <div className={titleSection}>
              <h1>Brands</h1>
              <Button content={'New Brand'} onClick={handleNewBrandNavigate} />
            </div>
            <div className={tableContainer}>
              <div className={searchBar}>
                <input placeholder='Start typing to search for brands' />
              </div>
              <DataTable
                columns={columns}
                data={brands}
                handleEditBrandNavigate={handleEditBrandNavigate}
              />
            </div>
            {/* Thêm phân trang */}
            <Pagination
              currentPage={page}
              totalItems={totalBrands}
              itemsPerPage={limit}
              onPageChange={handlePageChange}
            />
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default BrandList;
