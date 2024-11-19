import Header from '@components/public/Header/Header';
import styles from './styles.module.scss';
import Footer from '@components/public/Footer/Footer';
import Steps from './components/steps/Steps';
import Content from './components/contents/Content';
import MainLayout from '@components/public/Layout/Layout';

const Cart = () => {
  const { container } = styles;
  return (
    <>
      <Header />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Content />
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
