import React, { useRef } from 'react';
import logo from '@assets/svg/logo-500.svg';
import BasicForm from '@components/common/form/BasicForm';
import InputField from '@components/common/form/InputField';
import * as yup from 'yup';
import { defineMessages, useIntl } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';
import routes from '@routes';
import styles from './index.module.scss';
import classNames from 'classnames';
import './index.scss';
let schema = yup.object().shape({
    email: yup.string().email('Not a proper email').required('Required'), // pass your error message string
    password: yup.string().required('Required'), // pass your error message string
});

const message = defineMessages({
    username: 'Username',
    password: 'Password',
    login: 'Login',
    email: 'Email',
    error: 'Wrong email, please try again !',
    date: 'Birdthday',
});

const LoginComponent = () => {
    const navigate = useNavigate();
    const intl = useIntl();
    const form = useRef();
    const handleSubmit = (values) => {
        console.log(values);
        console.log("adadad");
        // navigate(routes.homePage.path);
    };
    return (
        <section className="login section" id="login">
            <div className="login__container">
                <img src={logo} alt="" className="login__logo" />
                <div className="login__title">
                    long term support <br /> your account
                </div>
                <BasicForm
                    initialValues={{ email: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={schema}
                    id="login-form"
                    ref={form}
                >
                    <InputField
                        name="email"
                        placeholder="Tên đăng nhập"
                        className={styles.inputField}
                        classNameInput={styles.inputBox}
                    />
                    <InputField
                        name="password"
                        className={styles.inputField}
                        placeholder="Mật khẩu"
                        classNameInput={styles.inputBox}
                        type="password"
                    />
                    <div className={styles.save}>
                        <div className="login__option">
                            <input type="checkbox" id="keep-login" className="login__checkbox" />
                            <label htmlFor="keep-login"> Giữ đăng nhập</label>
                            <Link to="/forget-password">Quên mật khẩu</Link>
                        </div>
                    </div>
                    <div className="login__policy">
                        Bằng cách đăng nhập, bạn đồng ý với <Link to="#">Chính sách bảo mật</Link> và{' '}
                        <Link to="#">Điều khoản sử dụng</Link> của cửa hàng
                    </div>
                    <div className={styles.actions}>
                        <button type="submit" key="submit" form="login-form" className="button full">
                            Sign in
                        </button>
                    </div>
                    <div className="login__register" >
                        Chưa có tài khoản? <Link to="/register">Đăng kí</Link>
                    </div>
                </BasicForm>
            </div>
        </section>
    );
};

export default LoginComponent;
