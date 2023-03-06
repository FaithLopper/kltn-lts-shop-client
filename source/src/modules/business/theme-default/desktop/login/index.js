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
import { toast } from 'react-toastify';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import useFetchAction from '@hooks/useFetchAction';
import { accountActions } from '@store/actions';
import { setCacheAccessToken } from '@services/userService';
import Button from '@components/common/elements/Button';

const message = defineMessages({
    username: 'Vui lòng nhập tên đăng nhập',
    password: 'Vui lòng nhập mật khẩu',
    loginFail: 'Đăng nhập thất bại !',
    loginSuccess: 'Đăng nhập thành công !',
});

const LoginComponent = () => {
    const intl = useIntl();
    const { execute, loading } = useFetch(apiConfig.account.login, {});
    const { execute: executeGetProfile, isLoading } = useFetchAction(accountActions.getProfile, {
        loading: useFetchAction.LOADING_TYPE.APP,
    });
    let schema = yup.object().shape({
        password: yup.string().required(intl.formatMessage(message.password)), // pass your error message string
        username: yup.string().required(intl.formatMessage(message.username)), // pass your error message string
    });
    const submit = (value) => {
        // console.log(value);
        schema
            .validate(value, { abortEarly: false })
            .then(() => {
                onLogin(value);
            })
            .catch((errors) => {
                errors.inner.forEach((error) => {
                    toast.error(`${error.path}: ${error.message}`);
                });
            });
    };

    const onLogin = (values) => {
        execute({
            data: {
                username: values.username,
                password: values.password,
                app: 'APP_WEB_CUSTOMER',
            },
            onCompleted: (res) => {
                try {
                    const { result, data } = res;
                    if (result && data) {
                        setCacheAccessToken(data.token);
                        executeGetProfile({ params: { token: data.token } });
                        toast.success(intl.formatMessage(message.loginSuccess));
                    }
                } catch (error) {
                    toast.error(intl.formatMessage(message.loginFail));
                }
            },
            onError: ({ message }) => {
                toast.error(message);
            },
        });
    };

    return (
        <section className="login section" id="login">
            <div className="login__container">
                <img src={logo} alt="" className="login__logo" />
                <div className="login__title">
                    long term support <br /> your account
                </div>
                <BasicForm
                    initialValues={{ username: '', password: '' }}
                    onSubmit={submit}
                    // validationSchema={schema}
                    id="login-form"
                    // ref={form}
                >
                    <InputField
                        name="username"
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
                        <Button
                            loading={loading || isLoading}
                            type="submit"
                            key="submit"
                            form="login-form"
                            className="button full"
                        >
                            Sign in
                        </Button>
                    </div>
                    <div className="login__register">
                        Chưa có tài khoản? <Link to="/register">Đăng kí</Link>
                    </div>
                </BasicForm>
            </div>
        </section>
    );
};

export default LoginComponent;
