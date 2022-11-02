import React from "react";
import {
  CheckCircleFilled,
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Popover, Result, Steps } from "antd";
import { Link } from "react-router-dom";
const { Step } = Steps;
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const Summary = () => {
  return (
    <section className="summary section">
      <div className="summary__container page-wrapper grid">
        <Result
          status="success"
          title="Cảm ơn quý khách, đơn hàng đã đặt thành công."
          subTitle={[
            <div className="summary__process">
              <Steps current={0} progressDot={customDot}>
                <Step
                  title="Chờ xác nhận"
                  description={[<LoadingOutlined />]}
                />
                <Step title="Chờ lấy hàng" />
                <Step title="Đang giao" />
                <Step title="Hoàn thành" />
              </Steps>
            </div>,
            <div className="content__title">Tổng: 1,500,000₫</div>,
            <div>Đơn hàng: 2017182818828182881</div>,
            <div>Dự kiến giao từ 9 đến ngày 7 tháng 11 2022.</div>,
          ]}
          extra={[
            <Link to="/" className="login__button round-button">
              Tiếp tục mua hàng
            </Link>,
          ]}
        />
      </div>
    </section>
  );
};

export default Summary;
