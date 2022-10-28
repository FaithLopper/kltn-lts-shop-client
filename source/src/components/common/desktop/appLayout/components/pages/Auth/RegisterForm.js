import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../../../../assets/svg/logo-500.svg";
import { Form, Input, DatePicker, Radio, Button } from "antd";
const RegisterForm = () => {
  const handleSubmit = (values) => {};
  return (
    <section className="login section" id="login">
      <div className="login__container">
        <img src={Logo} alt="" className="login__logo" />
        <div className="login__title">BECOME OUR MEMBER</div>
        <div className="login__subtitle">
          Tạo tài khoản để có thể tiếp cận sớm nhất đến sản phẩm, bài viết và
          cộng đồng của chúng tôi.
        </div>
        <Form onSubmit={handleSubmit} className="login__form">
          <Form.Item
            name="username"
            rules={[
              {
                type: "text",
                message: "The input is not valid user name!",
              },
              {
                required: true,
                message: "Please input your user name!",
              },
            ]}
          >
            <Input
              type="email"
              className="login__input input"
              placeholder="Tên đăng nhập"
            />
          </Form.Item>

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
              className="login__input input"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                type: "password",
                message: "The input is not valid password!",
              },
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              className="login__input input"
              placeholder="Mật khẩu"
            />
          </Form.Item>

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
              className="login__input input"
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
              className="login__input input"
              placeholder="Tên"
            />
          </Form.Item>

          <Form.Item
            name="birthDay"
            rules={[
              {
                type: "text",
                message: "The input is not valid birth day!",
              },
              {
                required: true,
                message: "Please input your birth day!",
              },
            ]}
          >
            <DatePicker className="input" placeholder="Ngày sinh" />
          </Form.Item>

          <Form.Item>
            <div  className="login__sex">
            <Button className="input login__sex-button">Nam</Button>
            <Button className="input login__sex-button">Nữ</Button>
            </div>
          </Form.Item>

          <Form.Item name="keep-login">
            <div className="login__option">
              <input
                type="checkbox"
                id="keep-login"
                className="login__checkbox"
              />
              <label for="keep-login" className="login__option-email">Đăng ký email để nhận thông tin cập nhật về các sản phẩm, ưu đãi và lợi ích Hội viên của bạn</label>
            </div>
          </Form.Item>
          <div className="login__policy">
            Bằng cách đăng nhập, bạn đồng ý với{" "}
            <Link to="#">Chính sách bảo mật</Link> và{" "}
            <Link to="#">Điều khoản sử dụng</Link> của cửa hàng
          </div>
          <button type="submit" className="login__button button">
            JOIN US
          </button>
          <div className="login__register">
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default RegisterForm;
