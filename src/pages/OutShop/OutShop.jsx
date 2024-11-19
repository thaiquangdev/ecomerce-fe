import Header from '@components/public/Header/Header';
import MainLayout from '@components/public/Layout/Layout';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from './components/Banner';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import Filter from './components/Filter';
import ListProduct from './components/ListProduct';

const OutShop = () => {
  const { container, funcBox, specialText, btnBack } = style;
  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <OurShopProvider>
        <Header />
        <MainLayout>
          <div className={container}>
            <div className={funcBox}>
              <div>
                Home {'>'} <span className={specialText}>Shop</span>
              </div>
              <div className={btnBack} onClick={() => handleBackPreviousPage()}>
                Return to previous page
              </div>
            </div>
          </div>
          <Banner />
          <div>
            <Filter />
            <ListProduct />
          </div>
        </MainLayout>
      </OurShopProvider>
    </>
  );
};

export default OutShop;
