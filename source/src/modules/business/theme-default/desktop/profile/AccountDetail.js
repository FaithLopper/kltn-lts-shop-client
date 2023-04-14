import React, { useRef, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, message, Select, Spin, Upload } from 'antd';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { showSucsessMessage, showErrorMessage } from '@services/notifyService';
import { accountActions } from '@store/actions';
import LoadingComponent from '@components/common/loading/LoadingComponent';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { convertStringToDateTime, convertUtcToTimezone } from '@utils';
import DatePickerField from '@components/common/form/DatePickerField';
import moment from 'moment';
import { DATE_DISPLAY_FORMAT } from '@constants';
import { DATE_FORMAT_DISPLAY } from '@constants';
import { convertDateTimeToString, convertLocalTimeToUtc } from '@utils/datetimeHelper';

const AccountDetail = () => {
    const dispatch = useDispatch();
    const formRef = useRef();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [save, setSave] = useState(false);
    const { execute: executeUpdateProfile } = useFetch(apiConfig.account.updateProfile, { immediate: false });
    useEffect(() => {
        setLoading(true);
        getDetail();
    }, []);

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const getDetail = () => {
        dispatch(
            accountActions.getProfile({
                params: {},
                onCompleted: (responseData) => {
                    const res = responseData.data;
                    if (res.result === true) {
                        if (res.data) {
                            setData({
                                ...res.data,
                                fullName: res.data.account.fullName,
                                username: res.data.account.username,
                                email: res.data.account.email,
                                birthday: moment(
                                    convertStringToDateTime(
                                        convertUtcToTimezone(res.data.birthday, 'DD/MM/YYYY'),
                                        'DD/MM/YYYY',
                                        'DD/MM/YYYY',
                                    ),
                                    DATE_FORMAT_DISPLAY,
                                ),
                            });
                            setLoading(false);
                        }
                    }
                },
                onError: (error) => {
                    showErrorMessage(error.message);
                    setLoading(false);
                },
            }));
    };

    const handleSubmit = (formValues) => {
        setSave(true);
        const birthday = convertLocalTimeToUtc(
            convertDateTimeToString(formValues.birthday, 'DD/MM/YYYY'),
            'DD/MM/YYYY');
        executeUpdateProfile({
            data: {
                ...formValues,
                birthday,
                id: data.id,
            },
            onCompleted: (responseData) => {
                console.log(responseData);
                if (responseData.result === true) {
                    showSucsessMessage('Cập nhật thông tin tài khoản thành công');
                    setSave(false);
                }
                setSave(false);
            },
            onError: (error) => {
                setSave(false);
            },
        });
    };

    return (
        <div className="profile__container">
            <div className="content__title">Chi tiết tài khoản</div>
            <div className="profile__body">
                {loading ? (
                    <LoadingComponent />
                ) : (
                    <>
                        {Object.keys(data) !== 0 ? (
                            <>
                                <div className="profile__addresss">
                                    <Form
                                        ref={formRef}
                                        className="checkout checkout__delivery"
                                        onFinish={handleSubmit}
                                        id="profile__detail"
                                        initialValues={Object.keys(data).length !== 0 ? data : {}}
                                    >
                                        <Form.Item
                                            name="fullName"
                                            rules={[
                                                {
                                                    type: 'text',
                                                    message: 'The input is not valid first name!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your first name!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="text"
                                                className="checkout__input input"
                                                placeholder="Họ tên người dùng"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    type: 'text',
                                                    message: 'The input is not valid first name!',
                                                },
                                                {
                                                    required: false,
                                                    message: 'Please input your first name!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="text"
                                                className="checkout__input input"
                                                placeholder="Tên tài khoản"
                                                disabled
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'text',
                                                    message: 'The input is not valid first name!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your first name!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="text"
                                                className="checkout__input input"
                                                placeholder="Email"
                                                // disabled
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="birthday"
                                            rules={[
                                                {
                                                    type: 'text',
                                                    message: 'The input is not valid birthday!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your birthday!',
                                                },
                                            ]}
                                        >
                                            <DatePicker format={DATE_FORMAT_DISPLAY} placeholder="Ngày sinh" />
                                        </Form.Item>
                                        <Form.Item
                                            name="gender"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your gender!',
                                                },
                                            ]}
                                        >
                                            <Select
                                                // defaultValue="lucy"
                                                options={[
                                                    {
                                                        value: 1,
                                                        label: 'Nam',
                                                    },
                                                    {
                                                        value: 2,
                                                        label: 'Nữ',
                                                    },
                                                    {
                                                        value: 3,
                                                        label: 'Khác',
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                        {/* <Form.Item
                                            name="oldPassword"
                                            rules={[
                                                {
                                                    // type: "number",
                                                    message: 'The input is not valid phone number!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your old password!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="password"
                                                className="checkout__input input"
                                                placeholder="Mật khẩu cũ"
                                                maxLength={20}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    // type: "number",
                                                    message: 'The input is not valid phone number!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your new password!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="password"
                                                className="checkout__input input"
                                                placeholder="Mật khẩu mới"
                                                maxLength={20}
                                            />
                                        </Form.Item> */}
                                    </Form>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'right',
                                        }}
                                    >
                                        <Button
                                            className="round-button"
                                            htmlType="submit"
                                            form="profile__detail"
                                            loading={save}
                                        >
                                            Lưu
                                        </Button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AccountDetail;
