import InputCommon from '@components/public/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register } from '@/apis/authService';
import { getInfo, login } from '@/apis/authService';
import { SiderBarContext } from '@/contexts/SideBar';

const Login = () => {
  const { container, title, boxRememberMe, lostPassword, btn } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const { setIsOpen, handleGetListProductCarts } = useContext(SiderBarContext);

  const validationSchema = yup.object({
    fullName: isRegister
      ? yup.string().required('Full name is required')
      : yup.string(),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: isRegister
      ? yup
          .string()
          .oneOf([yup.ref('password'), null], 'Password does not match')
          .required('Confirm Password is required')
      : yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      if (isLoading) {
        return;
      }
      if (isRegister) {
        const { email, fullName, password } = values;
        setIsLoading(true);
        await register({ email, password, fullName })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        const { email, password } = values;
        setIsLoading(true);

        await login({ email, password })
          .then((res) => {
            setIsLoading(false);
            localStorage.setItem('token', res.data.token);
            setIsOpen(false);
            handleGetListProductCarts('cart');
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }
    },
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className={container}>
      <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
      <form onSubmit={formik.handleSubmit}>
        {isRegister && (
          <InputCommon
            id='fullName'
            label='Full name'
            type='text'
            isRequired={true}
            formik={formik}
          />
        )}

        <InputCommon
          id='email'
          label='Email'
          type='text'
          isRequired={true}
          formik={formik}
        />

        <InputCommon
          id='password'
          label='Password'
          type='password'
          isRequired={true}
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id='confirmPassword'
            label='Confirm Password'
            type='password'
            isRequired={true}
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={boxRememberMe}>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
        )}
        <div className={btn}>
          <Button
            content={
              isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN'
            }
            type='submit'
            // onClick={() => toast.success('success')}
          />
        </div>
      </form>
      <Button
        content={
          isRegister ? 'Already have an account?' : "Don't have an account?"
        }
        type='submit'
        isPrimary={false}
        style={{ marginTop: '10px', width: '100%' }}
        onClick={handleToggle}
      />
      {!isRegister && <div className={lostPassword}>Lost your password?</div>}
    </div>
  );
};

export default Login;
