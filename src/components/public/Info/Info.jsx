import MainLayout from '@components/public/Layout/Layout';
import { dataInfo } from './constant';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';

const Info = () => {
  const { container } = styles;
  return (
    <MainLayout>
      <div className={container}>
        {dataInfo.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.des}
            src={item.src}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Info;
