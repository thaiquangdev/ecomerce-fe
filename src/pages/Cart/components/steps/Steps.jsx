import Stepper from './Stepper';
import styles from '../../styles.module.scss';

const Steps = () => {
  const { containerStep, steps, line, textNoti } = styles;

  const dataStep = [
    { number: 1, content: 'shopping map' },
    { number: 2, content: 'checkout' },
    { number: 3, content: 'order status' },
  ];

  return (
    <div className={containerStep}>
      <div className={steps}>
        {dataStep.map((item, index) => (
          <>
            <Stepper
              number={item.number}
              content={item.content}
              key={index}
              isDisable={index !== 0}
            />
            {index !== dataStep.length - 1 && <div className={line} />}
          </>
        ))}
      </div>
      <div className={textNoti}>
        You are out of time! Checkout now to avoid losing your order!
      </div>
    </div>
  );
};

export default Steps;
