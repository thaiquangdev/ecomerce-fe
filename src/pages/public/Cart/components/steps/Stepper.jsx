import classNames from 'classnames';
import styles from '../../styles.module.scss';

const Stepper = ({ number, content, isCompleted, isActive, isDisable }) => {
  const { stepper, numberStep, textStep, completed, active, disabled } = styles;

  return (
    <div className={stepper}>
      <div
        className={classNames(numberStep, {
          [completed]: isCompleted,
          [active]: isActive,
          [disabled]: isDisable,
        })}
      >
        {number}
      </div>
      <div
        className={classNames(textStep, {
          [completed]: isCompleted,
          [active]: isActive,
          [disabled]: isDisable,
        })}
      >
        {content}
      </div>
    </div>
  );
};

export default Stepper;
