import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '@icons/images/logo-retina.png';
import { dataSidebar } from './constants';
import { useState } from 'react';

const SidebarDashboard = () => {
  const { container, boxLogo, boxContent, boxList, boxItem, boxSubItem } =
    styles;

  // Sử dụng state để lưu trạng thái mở/đóng của mỗi menu con
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleToggleSubMenu = (id) => {
    // Tạo một bản sao của trạng thái hiện tại để thay đổi trạng thái của item vừa nhấn
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Đảo ngược trạng thái của menu con
    }));
  };

  return (
    <div className={container}>
      <div className={boxLogo}>
        <Link to='/dashboard'>
          <img src={logo} alt='' style={{ width: '153px', height: '53px' }} />
        </Link>
      </div>
      <div className={boxContent}>
        <ul className={boxList}>
          {dataSidebar.map((item) => (
            <li key={item.id}>
              <div
                className={boxItem}
                onClick={() => handleToggleSubMenu(item.id)} // Gọi hàm khi nhấn vào mục
              >
                <span>
                  <item.icon />
                </span>
                <span>{item.title}</span>
              </div>
              {openSubMenu[item.id] &&
                item.children && ( // Kiểm tra xem menu con có mở không
                  <div className={boxSubItem}>
                    {item.children.map((el) => (
                      <div key={el.id}>{el.title}</div>
                    ))}
                  </div>
                )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarDashboard;
