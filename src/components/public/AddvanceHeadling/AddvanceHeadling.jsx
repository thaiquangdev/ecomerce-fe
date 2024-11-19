import MainLayout from '@components/public/Layout/Layout';
import styles from './styles.module.scss';

const AddvanceHeadling = () => {
  const { container, headline, title, des, containterMidBox } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div className={headline}></div>
        <div className={containterMidBox}>
          <p className={des}>don&apos;t miss super offers</p>
          <p className={title}>Our best products</p>
        </div>
        <div className={headline}></div>
      </div>
    </MainLayout>
  );
};

export default AddvanceHeadling;
