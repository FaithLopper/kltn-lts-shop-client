import { Form, Input, Row, Col, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Delivery = ({ formRef,onNext,setFormData }) => {
  const handleSubmit= (formValue)=>{
      setFormData(formValue,0)
      onNext(0)
  }
  return (
    <Form onFinish={handleSubmit} ref={formRef}>
      <div class="checkout__delivery">
        <div className="checkout__part-info">
          <div className="content__title">
            Bạn muốn nhận đơn hàng như thế nào?
          </div>
          <Button className="big-button round-button-white">
            <i class="bx bx-package checkout__icon-big"></i>
            <span>Giao hàng</span>
          </Button>
          <div className="checkout__redirect">
            <Link to="/register" className="round-button-white">
              Trở thành thành viên
            </Link>
            <Link to="/login" className="round-button-white">
              Đăng nhập
            </Link>
          </div>
        </div>

        <div className="checkout__part-info">
          <div className="content__title">Nhập tên và địa chỉ</div>
          <Form.Item
            name="firstName"
            rules={[
              {
                type: "text",
                message: "The input is not valid first name!",
              },
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input
              type="text"
              className="checkout__input input"
              placeholder="Họ"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                type: "text",
                message: "The input is not valid last name!",
              },
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input
              type="text"
              className="checkout__input input"
              placeholder="Tên"
            />
          </Form.Item>

          <Form.Item
            name="address1"
            rules={[
              {
                type: "text",
                message: "The input is not valid address!",
              },
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input
              type="text"
              className="checkout__input input"
              placeholder="Địa chỉ số 1"
            />
          </Form.Item>

          <Form.Item
            name="address2"
            rules={[
              {
                type: "text",
                message: "The input is not valid address!",
              },
              {
                message: "Please input your address!",
              },
            ]}
          >
            <Input
              type="text"
              className="checkout__input input"
              placeholder="Địa chỉ số 2"
            />
          </Form.Item>
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
                  type='number'
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
          </Row>
          <Input
            value="Việt Nam"
            className="checkout__input input"
            suffix={<span className="checkout__dot"></span>}
          />
        </div>

        <div className="checkout__part-info">
          <div className="content__title">Thông tin liên hệ</div>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              type="email"
              className="checkout__input input"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                // type: "number",
                message: "The input is not valid phone number!",
              },
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              type="number"
              className="checkout__input input"
              placeholder="Số điện thoại"
              maxLength={10}
            />
          </Form.Item>

          <Form.Item name="keep-login">
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
          </Form.Item>
        </div>

        <div className="checkout__part-info">
          <button className="round-button" type="submit" >Tiếp tục</button>
        </div>
      </div>
    </Form>
  );
};

export default Delivery;
