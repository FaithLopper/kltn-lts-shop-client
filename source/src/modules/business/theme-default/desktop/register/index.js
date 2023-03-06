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
import { formatDateString } from '@utils';
import Button from '@components/common/elements/Button';

const message = defineMessages({
    username: 'Vui lòng nhập tên đăng nhập',
    password: 'Vui lòng nhập mật khẩu',
    email: 'Vui lòng nhập email',
    phone: 'Vui lòng nhập mật khẩu',
    fullName: 'Vui lòng nhập tên',
    birthday: 'Vui lòng nhập ngày sinh',
    loginFail: 'Đăng nhập thất bại !',
    loginSuccess: 'Đăng nhập thành công !',
    registerSuccess: 'Tạo tài khoản thành công !',
});

const RegisterComponent = () => {
    const intl = useIntl();
    const navigate = useNavigate();
    const { execute, loading } = useFetch(apiConfig.account.register, {});
    let schema = yup.object().shape({
        password: yup.string().required(intl.formatMessage(message.password)), // pass your error message string
        username: yup.string().required(intl.formatMessage(message.username)), // pass your error message string
        email: yup.string().required(intl.formatMessage(message.email)), // pass your error message string
        phone: yup.string().required(intl.formatMessage(message.phone)), // pass your error message string
        fullName: yup.string().required(intl.formatMessage(message.fullName)), // pass your error message string
        birthday: yup.string().required(intl.formatMessage(message.birthday)), // pass your error message string
    });
    const submit = (value) => {
        // console.log(value);
        schema
            .validate(value, { abortEarly: false })
            .then(() => {
                execute({
                    data: {
                        ...value,
                        birthday: formatDateString(value.birthday, 'DD/MM/YYYY'),
                    },
                    onCompleted: (res) => {
                        try {
                            const { result } = res;
                            if (result) {
                                toast.success(intl.formatMessage(message.registerSuccess));
                                navigate(routes.loginPage.path);
                            }
                        } catch (error) {
                            toast.error(intl.formatMessage(message.loginFail));
                        }
                    },
                    onError: ({ message }) => {
                        toast.error(message);
                    },
                });
            })
            .catch((errors) => {
                errors.inner.forEach((error) => {
                    toast.error(`${error.path}: ${error.message}`);
                });
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
                    <InputField
                        name="email"
                        className={styles.inputField}
                        placeholder="Email"
                        classNameInput={styles.inputBox}
                        type="email"
                    />
                    <InputField
                        name="phone"
                        className={styles.inputField}
                        placeholder="Số điện thoại"
                        classNameInput={styles.inputBox}
                        type="number"
                    />
                    <InputField
                        name="fullName"
                        className={styles.inputField}
                        placeholder="Họ và Tên"
                        classNameInput={styles.inputBox}
                    />
                    <InputField
                        name="birthday"
                        className={styles.inputField}
                        placeholder="Ngày sinh"
                        classNameInput={styles.inputBox}
                        type="date"
                    />
                    <div className="switch-field">
                        <input type="radio" id="radio-one" name="gender" value={0} checked />
                        <label htmlFor="radio-one">Nam</label>
                        <input type="radio" id="radio-two" name="gender" value={1} />
                        <label htmlFor="radio-two">Nữ</label>
                    </div>
                    <div className={styles.save}>
                        <div className="login__option">
                            <input type="checkbox" id="keep-login" className="login__checkbox" />
                            <label htmlFor="keep-login">
                                Đăng ký email để nhận thông tin cập nhật về các sản phẩm, ưu đãi và lợi ích Hội viên của
                                bạn
                            </label>
                        </div>
                    </div>
                    <div className="login__policy">
                        Bằng cách đăng nhập, bạn đồng ý với <Link to="#">Chính sách bảo mật</Link> và{' '}
                        <Link to="#">Điều khoản sử dụng</Link> của cửa hàng
                    </div>
                    <div className={styles.actions}>
                        <Button loading={loading} type="submit" key="submit" form="login-form" className="button full">
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

export default RegisterComponent;
