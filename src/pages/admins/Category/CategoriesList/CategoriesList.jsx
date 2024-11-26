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

const CategoriesList = () => {
  const {
    container,
    content,
    layout,
    titleSection,
    tableContainer,
    searchBar,
  } = styles;
  const navigate = useNavigate();
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
                <input placeholder='Start typing to search for categories' />
              </div>
              <DataTable
                columns={columns}
                data={categories}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default CategoriesList;
