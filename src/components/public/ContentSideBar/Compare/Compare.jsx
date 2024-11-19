import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

const Compare = () => {
  const { container, boxContent, btn } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<TfiReload size={30} />} title={'COMPARE'} />
        <ItemProduct />
      </div>
      <div className={btn}>
        <Button content={'VIEW COMPARE'} />
      </div>
    </div>
  );
};

export default Compare;
