import styles from '../styles.module.scss';

const ShippingAddress = ({ city, street, zipCode, country, phoneNumber }) => {
  const { customerContainer, customerHeader, info, infoName } = styles;
  return (
    <div className={customerContainer}>
      <div className={customerHeader}>
        <h2>Shipping Address</h2>
      </div>
      <div className={info}>
        <div className={infoName}>{zipCode}</div>
        <div className={infoName}>
          {street}
          {` ${city} city `} {country}
        </div>
        <div className={infoName}>{phoneNumber}</div>
      </div>
    </div>
  );
};

export default ShippingAddress;
