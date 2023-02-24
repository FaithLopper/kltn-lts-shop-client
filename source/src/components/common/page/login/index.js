import React, { useState } from 'react';
import BasicForm from '@components/common/form/BasicForm';
import { defineMessages, useIntl } from 'react-intl';
import styles from './index.module.scss';
import InputField from '@components/common/form/InputField';
import * as yup from 'yup';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { apiUrl } from '@constants';
// import logo from '@assets/images/logo.png';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import routes from '@routes';
import ToolTips from '@components/common/elements/ToolTips';
import { toast } from 'react-toastify';
import NotificationElement from '@components/common/form/NotificationElement';

let schema = yup.object().shape({
    email: yup.string().email('Not a proper email').required('Required'), // pass your error message string
});


const message = defineMessages({
    username: 'Username',
    password: 'Password',
    login: 'Login',
    email: 'Email',
    error: 'Wrong email, please try again !',
    date: 'Birdthday',
});

const Login = () => {
    const intl = useIntl();
    const [ error, setError ] = useState(false);
    const { execute, loading } = useFetch(apiConfig.account.login, {});
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        navigate(routes.homePage.path);
        execute({
            data: {
                email: values?.email,
            },
            onCompleted: (res) => {
                if (res.data && res.statusCode === 200) {
                    const data = res.data;
                    if (data.loginType && data.loginType === 'sso') {
                        let endpoint = data.loginUrl;
                        if (endpoint.charAt(0) === '/') {
                            endpoint = data.loginUrl.slice(1);
                        }
                        return window.location.replace(apiUrl + endpoint);
                    } else {
                        toast.error(intl.formatMessage(message.error));
                        // showErrorMessage(intl.formatMessage(message.error));
                        // setError(true);
                        // setTimeout(() => {
                        //     setError(false);
                        // }, 5000);
                        // mixinFuncs.handleReset();
                    }
                }
            },
            onError: (err) => console.log({ err }),
        });
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <div className={styles.row}>
                    <div className={styles.offset} />
                    <div className={classNames(styles.loginWrapper, styles.content)}>
                        {/* <img src={logo} alt="company-logo" className={styles.loginLogo} /> */}
                        {/* <div className={styles.loginAppname}>
                            Cyber++ Vista <br />
                            v1.0.1
                        </div> */}
                    </div>
                </div>
                <BasicForm
                    initialValues={{ email: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={schema}
                    id="loginForm"
                >
                    <InputField
                        name="email"
                        label={intl.formatMessage(message.email)}
                        className={styles.inputField}
                        classNameInput={styles.inputBox}
                    />
                    <InputField
                        name="password"
                        label={intl.formatMessage(message.password)}
                        className={styles.inputField}
                        classNameInput={styles.inputBox}
                    />
                    <div className={classNames(styles.row, styles.actions)}>
                        <div className={styles.offset} />
                        <div className={styles.content}>
                            {/* <div className={styles.rowActions}>
                                <a href="#">Forget Password</a>
                            </div> */}
                            <button className={styles.microsoftAuth}>Sign in</button>
                        </div>
                    </div>
                    <NotificationElement />
                </BasicForm>
            </div>
        </div>
    );
};

export default Login;
