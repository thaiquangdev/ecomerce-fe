import styles from '../../styles.module.scss';
import CartTable from './CartTable';

const Content = () => {
  const { containerContent } = styles;
  return (
    <div className={containerContent}>
      <div>
        <CartTable />
      </div>
      <div></div>
    </div>
  );
};

export default Content;
