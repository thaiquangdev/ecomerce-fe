import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const HeaderSideBar = ({ icon, title, type }) => {
  const { container } = styles;
  return (
    <div className={container}>
      {icon}
      <Link to={type}>{title}</Link>
    </div>
  );
};

export default HeaderSideBar;
