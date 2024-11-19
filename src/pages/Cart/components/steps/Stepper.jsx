import classNames from 'classnames';
import styles from '../../styles.module.scss';
const Stepper = ({ number, content, isDisable }) => {
  const { stepper, numberStep, textStep, isDis, isDisText } = styles;
  return (
    <div className={stepper}>
      <div className={classNames(numberStep, { [isDis]: isDisable })}>
        {number}
      </div>
      <div className={classNames(textStep, { [isDisText]: isDisable })}>
        {content}
      </div>
    </div>
  );
};

export default Stepper;
