// DataTable.js
import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const DataTable = ({ columns, data, onEdit, onDelete }) => {
  const { container } = styles;
  const renderCell = (value) => {
    if (typeof value === 'boolean') {
      return value ? 'true' : 'false'; // Thay đổi giá trị boolean thành chuỗi
    }
    return value;
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
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{renderCell(row[col.field])}</td>
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
