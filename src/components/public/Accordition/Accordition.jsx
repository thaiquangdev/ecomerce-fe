import styles from './styles.module.scss';

const Accordition = ({ title, toggleAccordion, isOpen, children }) => {
  const { accordionItem, accordionHeader, accordionIcon, open, accordionBody } =
    styles;
  return (
    <div className={accordionItem}>
      <div className={accordionHeader} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`${accordionIcon} ${isOpen ? { open } : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && <div className={accordionBody}>{children}</div>}
    </div>
  );
};

export default Accordition;
