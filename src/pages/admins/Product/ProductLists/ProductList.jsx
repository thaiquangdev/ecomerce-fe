import DashboardLayout from '@components/admin/Layout/Layout';
import SidebarDashboard from '@components/admin/SidebarDashboard/SidebarDashboard';
import TopHeader from '@components/admin/TopHeader/TopHeader';
import Button from '@components/Button/Button';
import DataTable from '@components/admin/DataTable/DataTable';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { getProducts } from '@/apis/productService';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '@/apis/productService';
import Pagination from '@components/admin/Pagination/Pagination';

const ProductList = () => {
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

  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [totalProducts, setTotalProducts] = useState(0);
  const [name, setName] = useState('');

  const columns = [
    { header: 'ID', field: 'id' },
    { header: 'Title', field: 'title' },
    { header: 'Brand', field: 'brand' },
    { header: 'Category', field: 'category' },
    { header: 'Price', field: 'price' },
    { header: 'Stock', field: 'variants' },
  ];

  const handleAddNewProductNavigate = () => {
    navigate(`/dashboard/product`);
  };

  const onEdit = (row) => {
    navigate(`/dashboard/product/${row.slug}`);
  };

  const onDelete = (row) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete product "${row.title}"?`
    );
    if (confirmDelete) {
      console.log('Delete API call for:', row.id); // Bạn có thể thay thế bằng API xóa
      deleteProduct(row.slug)
        .then((res) => {
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getProducts({ limit, page, sort: 0, name })
      .then((res) => {
        setProducts(res.products);
        setTotalProducts(res.totalProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit, page, name]);

  // hàm xử lý phân trang
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // hàm xử lý tìm kiếm
  const handleSearchTitle = (e) => {
    setName(e);
    getProducts({ limit, page, sort: 0, name: e })
      .then((res) => {
        setProducts(res.products);
        setTotalProducts(res.totalProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={container}>
      <SidebarDashboard />
      <div className={content}>
        <TopHeader />
        <DashboardLayout>
          <div className={layout}>
            <div className={titleSection}>
              <h1>Products</h1>
              <Button
                content={'New Product'}
                onClick={handleAddNewProductNavigate}
              />
            </div>
            <div className={tableContainer}>
              <div className={searchBar}>
                <input
                  placeholder='Start typing to search for products'
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
                data={products}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </div>
            {totalProducts > 8 && (
              <div className={pagination}>
                <Pagination
                  currentPage={page}
                  totalItems={totalProducts}
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

export default ProductList;
