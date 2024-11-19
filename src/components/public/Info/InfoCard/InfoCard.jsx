import styles from '../styles.module.scss';

const InfoCard = ({ title, description, src }) => {
  const { containerCard, containerContent, titleHes, des } = styles;
  return (
    <div className={containerCard}>
      <img src={src} width={40} height={41} alt='' />
      <div className={containerContent}>
        <div className={titleHes}>{title}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
