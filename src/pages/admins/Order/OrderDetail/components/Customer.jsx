import styles from '../styles.module.scss';

const Customer = ({ fullName, email }) => {
  const {
    customerContainer,
    customerHeader,
    info,
    infoName,
    infoEmail,
    infoPhone,
  } = styles;
  return (
    <div className={customerContainer}>
      <div className={customerHeader}>
        <h2>Customer</h2>
      </div>
      <div className={info}>
        <div className={infoName}>{fullName}</div>
        <div className={infoEmail}>{email}</div>
        <div className={infoPhone}>123542345</div>
      </div>
    </div>
  );
};

export default Customer;
