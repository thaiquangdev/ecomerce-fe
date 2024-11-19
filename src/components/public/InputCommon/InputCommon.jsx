import { useState } from 'react';
import styles from './styles.module.scss';
import { IoIosEye } from 'react-icons/io';
import { IoEyeOffSharp } from 'react-icons/io5';

const InputCommon = ({ label, type, isRequired = false, ...props }) => {
  const { container, labelInput, boxInput, boxIcon, errorMes } = styles;
  const { formik, id } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isErr = formik.touched[id] && formik.errors[id];
  const messageErr = formik.errors[id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <IoEyeOffSharp /> : <IoIosEye />}
          </div>
        )}
        {isErr && <div className={errorMes}>{messageErr}</div>}
      </div>
    </div>
  );
};

export default InputCommon;
