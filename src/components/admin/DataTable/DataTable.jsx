// DataTable.js
import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const DataTable = ({ columns, data, onEdit, onDelete }) => {
  const { container, inStock, outOfStock } = styles;

  const renderCell = (value, columnName) => {
    if (typeof value === 'boolean') {
      return value ? 'True' : 'False'; // Thay đổi giá trị boolean thành chuỗi
    }

    if (typeof value === 'number' && columnName === 'price') {
      // Định dạng tiền tệ với dấu phân cách hàng nghìn và 2 chữ số sau dấu thập phân
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    }

    if (columnName === 'category') {
      // Nếu cột là 'category', kiểm tra và hiển thị tên
      return value && value.categoryName ? value.categoryName : 'N/A';
    }

    if (columnName === 'brand') {
      // Nếu cột là 'brand', kiểm tra và hiển thị tên
      return value && value.brandName ? value.brandName : 'N/A';
    }

    if (columnName === 'variants') {
      // Kiểm tra `value` và `variants` hợp lệ trước khi xử lý
      const totalStock =
        value &&
        value.reduce((sum, item) => {
          // Kiểm tra và đảm bảo `item.stock` là số hợp lệ
          return sum + (typeof item.stock === 'number' ? item.stock : 0);
        }, 0);

      const totalSold =
        value &&
        value.reduce((sum, item) => {
          return sum + (typeof item.sold === 'number' ? item.sold : 0);
        }, 0);

      return totalStock === 0 ? (
        <span className={outOfStock}>Out of Stock</span>
      ) : (
        <span className={inStock}>
          {' '}
          {`${totalStock} In Stock`} {totalSold > 0 && `| Sold: ${totalSold}`}
        </span>
      );
    }

    if (columnName === 'createdAt') {
      const date = new Date(value);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
      const year = date.getFullYear();

      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    }

    if (columnName === 'user') {
      return value.fullName;
    }

    if (columnName === 'cart') {
      return value?.details?.length;
    }

    // Nếu giá trị không phải là đặc biệt, trả về giá trị gốc
    return value !== null && value !== undefined ? value : 'N/A';
  };

  return (
    <table className={container}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
          {/* Cột Action thêm vào cuối */}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{renderCell(row[col.field], col.field)}</td>
            ))}
            {/* Thêm các nút "Sửa" và "Xóa" ở cuối mỗi hàng */}
            <td>
              <Button
                content={<MdModeEdit />}
                onClick={() => onEdit(row)}
                className={styles.editButton}
              />

              <Button
                content={<MdDelete />}
                onClick={() => onDelete(row)}
                className={styles.deleteButton}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
