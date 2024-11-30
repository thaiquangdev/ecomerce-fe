import DashboardLayout from '@components/admin/Layout/Layout';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import DataTable from '@components/admin/DataTable/DataTable';
import { useEffect, useState } from 'react';
import { getCategories } from '@/apis/categoryService';
import { useNavigate } from 'react-router-dom';
import { deleteCategory } from '@/apis/categoryService';
import Pagination from '@components/admin/Pagination/Pagination';

const CategoriesList = () => {
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
  const [categories, setCategories] = useState([]);
  const [totalCategories, setTotalCategories] = useState(0); // tổng số danh mục
  const [limit, setLimit] = useState(8); // số lượng bản ghi trên mỗi trang
  const [page, setPage] = useState(1); // trang hiện tại
  const [name, setName] = useState(''); // tên tìm kiếm
  const columns = [
    { header: 'ID', field: 'id' },
    { header: 'Category Name', field: 'categoryName' },
    { header: 'Slug', field: 'categorySlug' },
    { header: 'Active', field: 'isActive' },
  ];

  useEffect(() => {
    getCategories({ limit, page, name }).then(
      (res) => {
        setCategories(res.categories);
        setTotalCategories(res.totalCategories);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [limit, page, name]);

  const handleNewCategoryNavigate = () => {
    navigate('/dashboard/category'); // Điều hướng tới trang thêm mới
  };

  const handleEdit = (row) => {
    navigate(`/dashboard/category/${row.categorySlug}`); // Điều hướng tới trang sửa với slug cụ thể
  };

  const handleDelete = (row) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete category "${row.brandName}"?`
    );
    if (confirmDelete) {
      console.log('Delete API call for:', row.id); // Bạn có thể thay thế bằng API xóa
      deleteCategory(row.categorySlug)
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
    getCategories({ limit, page, name }).then(
      (res) => {
        setCategories(res.categories);
        setTotalCategories(res.totalCategories);
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
              <h1>Categories</h1>
              <Button
                content={'New Category'}
                onClick={handleNewCategoryNavigate}
              />
            </div>
            <div className={tableContainer}>
              <div className={searchBar}>
                <input
                  placeholder='Start typing to search for categories'
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
                data={categories}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
            {totalCategories > 8 && (
              <div className={pagination}>
                <Pagination
                  currentPage={page}
                  totalItems={totalCategories}
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

export default CategoriesList;
