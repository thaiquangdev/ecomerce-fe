import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../style.module.scss';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from './SelectBox';

const Filter = () => {
  const { containerFilter, boxIcon, boxLeft } = styles;
  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);
  const getValueSelect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };
  const handleShowGrid = (type) => {
    setIsShowGrid(type === 'grid');
  };
  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type='sort'
        />
        <div className={boxIcon}>
          <TfiLayoutGrid4
            size={20}
            color='#222'
            cursor={'pointer'}
            onClick={() => handleShowGrid('grid')}
          />
          <div
            style={{ height: '20px', width: '1px', backgroundColor: '#e1e1e1' }}
          />
          <CiCircleList
            size={20}
            color='#222'
            cursor={'pointer'}
            onClick={() => handleShowGrid('list')}
          />
        </div>
      </div>
      <div className={boxLeft}>
        <div style={{ fontSize: '14px', color: '#555' }}>Show</div>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type='show'
        />
      </div>
    </div>
  );
};

export default Filter;
