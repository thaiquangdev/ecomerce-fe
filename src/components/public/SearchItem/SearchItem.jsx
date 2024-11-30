import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm hook useNavigate
import styles from './styles.module.scss';
import { SearchContext } from '@/contexts/SearchProvider';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import Button from '@components/Button/Button.jsx';

const SearchItem = () => {
  const {
    container,
    overlay,
    search,
    slideSearch,
    boxModel,
    boxContent,
    boxClose,
    boxTitle,
    titl,
    boxSearch,
    boxInput,
    boxBtn,
  } = styles;

  const { isSearchVisiable, setIsSearchVisiable, categories } =
    useContext(SearchContext);

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const navigate = useNavigate(); // Khởi tạo navigate

  const handleSearch = () => {
    // Xây dựng query string
    const queryParams = new URLSearchParams();

    if (category.trim()) queryParams.append('category', category);
    if (title.trim()) queryParams.append('name', title);

    // Nếu không có tham số nào, điều hướng về trang shop ban đầu
    if (!category.trim() && !title.trim()) {
      navigate('/shop');
      return;
    }

    // Điều hướng đến trang danh sách sản phẩm kèm query string
    navigate(`/shop?${queryParams.toString()}`);
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isSearchVisiable,
        })}
        onClick={() => setIsSearchVisiable(false)}
      />
      <div
        className={classNames(search, {
          [slideSearch]: isSearchVisiable,
        })}
      >
        {isSearchVisiable && (
          <div className={boxModel}>
            <span
              className={boxClose}
              onClick={() => setIsSearchVisiable(false)}
            >
              <IoMdClose size={30} />
            </span>
            <div className={boxContent}>
              <div className={boxTitle}>
                <div className={titl}>What Are You Looking For?</div>
              </div>
              <div className={boxSearch}>
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option value=''>All Categories</option>
                  {categories.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.categoryName}
                    </option>
                  ))}
                </select>
                <div className={boxInput}>
                  <input
                    placeholder='Search for products'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className={boxBtn}>
                  <Button content={'SEARCH'} onClick={handleSearch} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
