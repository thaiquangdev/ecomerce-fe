import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

const Login = () => {
  const { container, content, title, boxItem, boxBtn, boxForgot } = styles;
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={container}>
      <div className={content}>
        <div className={title}>
          <h1>Sign In</h1>
          <p>Log in to your account to continue.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={boxItem}>
            <label htmlFor=''>Email Address</label>
            <input
              id='email'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          <div className={boxItem}>
            <label htmlFor=''>Password</label>
            <input
              id='password'
              type='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          <div className={boxBtn}>
            <Button content={'Sign in'} />
          </div>
        </form>
        <div className={boxForgot}>
          <Link to='/forgot-password'>Forgot password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;