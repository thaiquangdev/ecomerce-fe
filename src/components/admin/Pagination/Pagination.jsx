import Button from '@components/Button/Button';
import styles from './styles.module.scss'; // Import styles cho phân trang
import classNames from 'classnames';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Tính tổng số trang

  const handleClick = (page) => {
    if (page < 1 || page > totalPages) return; // Trang hợp lệ
    onPageChange(page); // Gọi hàm thay đổi trang
  };

  // Tạo dải số trang với số nút giới hạn (2 nút trước/sau trang hiện tại)
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const range = 2; // Hiển thị tối đa 2 trang trước và sau

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className={styles.pagination}>
      {/* Nút Prev */}
      <Button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        content={'Prev'}
        isPrimary={false}
        className={classNames({ [styles.disabled]: currentPage === 1 })}
      />

      {/* Nút số trang */}
      {pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => handleClick(page)}
          content={page}
          isPrimary={page === currentPage} // Đánh dấu nút đang được chọn
          className={classNames({ [styles.active]: page === currentPage })}
        />
      ))}

      {/* Nút Next */}
      <Button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        content={'Next'}
        isPrimary={false}
        className={classNames({
          [styles.disabled]: currentPage === totalPages,
        })}
      />
    </div>
  );
};

export default Pagination;
