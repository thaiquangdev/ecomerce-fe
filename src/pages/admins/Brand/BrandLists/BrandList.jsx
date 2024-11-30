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
import { deleteBrand } from '@/apis/brandService';

const BrandList = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    tableContainer,
    searchBar,
    pagination,
  } = styles;
  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);
  const [totalBrands, setTotalBrands] = useState(0); // Tổng số thương hiệu
  const [page, setPage] = useState(1); // Trang hiện tại
  const [limit, setLimit] = useState(8); // Số lượng bản ghi mỗi trang
  const [name, setName] = useState(''); // tên tìm kiếm

  const columns = [
    { header: 'ID', field: 'id' },
    { header: 'Brand Name', field: 'brandName' },
    { header: 'Slug', field: 'brandSlug' },
    { header: 'Active', field: 'isActive' },
  ];

  useEffect(() => {
    // Lấy dữ liệu khi trang hoặc limit thay đổi
    getBrands({ page, limit, name }).then(
      (res) => {
        setBrands(res.brands);
        setTotalBrands(res.totalBrands);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [page, limit, name]);

  const handleNewBrandNavigate = () => {
    navigate('/dashboard/brand');
  };

  const handleEdit = (row) => {
    navigate(`/dashboard/brand/${row.brandSlug}`); // Điều hướng tới trang sửa với slug cụ thể
  };

  const handleDelete = (row) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete brand "${row.brandName}"?`
    );
    if (confirmDelete) {
      console.log('Delete API call for:', row.id); // Bạn có thể thay thế bằng API xóa
      deleteBrand(row.brandSlug)
        .then((res) => {
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Hàm xử lý sự kiện phân trang
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // hàm xử lý sự kiện tìm kiếm
  const handleSearchTitle = (e) => {
    setName(e);
    getBrands({ page, limit, name: e }).then(
      (res) => {
        setBrands(res.brands);
        setTotalBrands(res.totalBrands);
      },
      (err) => {
        console.log(err);
      }
    );
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
                <input
                  placeholder='Start typing to search for brands'
                  value={name}
                  onChange={(e) => handleSearchTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchTitle(e.target.value);
                    }
                  }}
                />
              </div>
              <DataTable
                columns={columns}
                data={brands}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
            {/* Thêm phân trang */}
            {totalBrands > 8 && (
              <div className={pagination}>
                <Pagination
                  currentPage={page}
                  totalItems={totalBrands}
                  itemsPerPage={limit}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default BrandList;
