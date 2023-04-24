import { Form, Input, Row, Col, Button, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import LocationField from '@components/common/form/LocationField';
import { useEffect } from 'react';
import useAuth from '@hooks/useAuth';

const Delivery = ({ formRef, onNext, setFormData, scrollTop, executeGetLocation, formData }) => {
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const { profile } = useAuth();

    useEffect(() => {
        executeGetLocation({
            params: {
                kind: 1,
                size: 100,
            },
            onCompleted: (data) => handleLocationData(data),
            onError: () => {},
        });
    }, []);

    useEffect(() => {
        if (Object.keys(formData).length !== 0) formRef.current.setFieldsValue(formData);
    }, [formData]);

    const handleLocationChange = (type, key) => {
        if (key !== undefined) {
            if (type === 2) {
                setDistrict([]);

                executeGetLocation({
                    params: {
                        kind: type,
                        size: 100,
                        parentId: key,
                    },
                    onCompleted: (data) => {
                        formRef.current.setFieldsValue({ ['districtId']: undefined });
                        formRef.current.setFieldsValue({ ['wardId']: undefined });
                        handleLocationData(data);
                    },
                    onError: () => {},
                });
            }
            if (type === 3) {
                setWard([]);
                executeGetLocation({
                    params: {
                        kind: type,
                        size: 100,
                        parentId: key,
                    },
                    onCompleted: (data) => {
                        formRef.current.setFieldsValue({ ['wardId']: undefined });
                        handleLocationData(data);
                    },
                    onError: () => {},
                });
            }
        }
    };

    const handleLocationData = (responseData) => {
        if (responseData.result) {
            if (responseData.data) {
                if (responseData.data.data.length !== 0) {
                    const { data } = responseData.data;
                    if (responseData.data.data[0].kind === 1) {
                        setProvince([
                            ...data.map((item) => {
                                return {
                                    value: item.name,
                                    key: item.id,
                                };
                            }),
                        ]);
                    }

                    if (responseData.data.data[0].kind === 2) {
                        setDistrict([
                            ...data.map((item) => {
                                return {
                                    value: item.name,
                                    key: item.id,
                                };
                            }),
                        ]);
                    }

                    if (responseData.data.data[0].kind === 3) {
                        setWard([
                            ...data.map((item) => {
                                return {
                                    value: item.name,
                                    key: item.id,
                                };
                            }),
                        ]);
                    }
                }
            } else {
                console.log(responseData);
            }
        }
    };
    const handleSubmit = (formValue) => {
        setFormData(formValue, 0);
        onNext(0);
        scrollTop();
    };
    return (
        <Form onFinish={handleSubmit} ref={formRef}>
            <div className="checkout__delivery">
                <div className="checkout__part-info">
                    <div className="content__title">Thông tin người nhận và địa chỉ nhận hàng</div>
                    {/* <Button className="big-button round-button-white">
                        <i className="bx bx-package checkout__icon-big"></i>
                        <span>Giao hàng</span>
                    </Button> */}
                    {!profile && (
                        <div className="checkout__redirect">
                            <Link to="/register" className="round-button-white">
                                Trở thành thành viên
                            </Link>
                            <Link to="/login" className="round-button-white">
                                Đăng nhập
                            </Link>
                        </div>
                    )}
                </div>

                <div className="checkout__part-info">
                    <div className="content__title">
                        Nhập tên và địa chỉ <span className="required-field">*</span>
                    </div>
                    <Form.Item
                        name="receiverName"
                        rules={[
                            {
                                type: 'text',
                                message: 'Họ và tên người nhận không hợp lệ',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập họ và tên người nhận',
                            },
                        ]}
                    >
                        <Input type="text" className="checkout__input input" placeholder="Tên người nhận" />
                    </Form.Item>

                    <Form.Item name="note">
                        <TextArea className="checkout__input input" placeholder="Ghi chú" />
                    </Form.Item>
                    <Form.Item
                        name="addressDetails"
                        rules={[
                            {
                                type: 'text',
                                message: 'Địa chỉ không hợp lệ',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ cụ thể',
                            },
                        ]}
                    >
                        <Input type="text" className="checkout__input input" placeholder="Địa chỉ cụ thể" />
                    </Form.Item>

                    <div className="location-field">
                        <Row gutter={[16, 0]}>
                            <Col span={8}>
                                <LocationField
                                    fieldName="provinceId"
                                    required
                                    labelCol={{ span: 24 }}
                                    label="Tỉnh"
                                    placeholder="Tỉnh"
                                    allowClear={true}
                                    options={province}
                                    onChange={(e) => handleLocationChange(2, e)}
                                />
                            </Col>
                            <Col span={8}>
                                <LocationField
                                    fieldName="districtId"
                                    required
                                    labelCol={{ span: 24 }}
                                    allowClear={true}
                                    placeholder="Huyện"
                                    label="Quận"
                                    options={district}
                                    onChange={(e) => handleLocationChange(3, e)}
                                />
                            </Col>
                            <Col span={8}>
                                <LocationField
                                    required
                                    labelCol={{ span: 24 }}
                                    fieldName="wardId"
                                    label="Huyện/Xã"
                                    placeholder="Xã"
                                    allowClear={true}
                                    options={ward}
                                />
                            </Col>
                        </Row>
                    </div>

                    {/*
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="postalCode"
                rules={[
                  {
                    type: "number",
                    message: "The input is not valid postal code!",
                  },
                  {
                    required: false,
                    message: "Please input your postal code!",
                  },
                ]}
              >
                <Input
                  type="number"
                  maxLength={6}
                  className="checkout__input input"
                  placeholder="Mã bưu điện"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="cityName"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid city name!",
                  },
                  {
                    required: true,
                    message: "Please input your city name!",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="checkout__input input"
                  placeholder="Tên thành phố"
                />
              </Form.Item>
            </Col>
          </Row> */}
                    <Input
                        value="Việt Nam"
                        className="checkout__input input"
                        suffix={<span className="checkout__dot"></span>}
                    />
                </div>

                <div className="checkout__part-info">
                    <div className="content__title">
                        Thông tin liên hệ <span className="required-field">*</span>
                    </div>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'email không hợp lệ',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập email',
                            },
                        ]}
                    >
                        <Input type="email" className="checkout__input input" placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="receiverPhone"
                        rules={[
                            {
                                pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/gu),
                                message: 'Số điện thoại không hợp lệ',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại',
                            },
                        ]}
                    >
                        <Input
                            type="number"
                            className="checkout__input input phone_input"
                            placeholder="Số điện thoại"
                            maxLength={10}
                            min={0}
                        />
                    </Form.Item>

                    {/* <Form.Item name="keep-login">
            <div className="login__option">
              <input type="checkbox" className="checkout__checkbox" />
              <label>
                <div className="login__policy">
                  Tôi đã đọc <Link to="#">Chính sách bảo mật</Link> và{" "}
                  <Link to="#">Điều khoản sử dụng</Link> của cửa hàng và đồng ý
                  để xử lý thông tin của tôi theo Cam kết bảo mật của cửa hàng
                </div>
              </label>
            </div>
          </Form.Item> */}
                </div>

                <div className="checkout__part-info">
                    <button className="round-button" type="submit">
                        Tiếp tục
                    </button>
                </div>
            </div>
        </Form>
    );
};

export default Delivery;