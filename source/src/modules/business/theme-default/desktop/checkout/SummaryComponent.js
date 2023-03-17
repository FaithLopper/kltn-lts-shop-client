import { Popover, Result, Steps } from 'antd';
import React from 'react';
const { Step } = Steps;
import { LoadingOutlined } from '@ant-design/icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import './summary.scss';
import { formatMoney } from '@utils';
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
const SummaryComponent = () => {
    const location = useLocation();
    return (
        <section className="summary section">
            <div className="summary__container page-wrapper grid">
                <Result
                    status="success"
                    title="Cảm ơn quý khách, đơn hàng đã đặt thành công."
                    subTitle={[
                        <div className="summary__process" key={0}>
                            <Steps current={0} progressDot={customDot}>
                                <Step title="Chờ xác nhận" description={[ <LoadingOutlined key={6}/> ]} />
                                <Step title="Chờ lấy hàng" />
                                <Step title="Đang giao" />
                                <Step title="Hoàn thành" />
                            </Steps>
                        </div>,
                        <div className="content__title" key={2}>Tổng: {formatMoney(location.state.totalPrice) || 0}</div>,
                        <div key={3}>Đơn hàng: {location.state.id}</div>,
                        <div key={4}>Dự kiến giao từ 9 đến ngày 7 tháng 11 2022.</div>,
                    ]}
                    extra={[
                        <Link to="/" className="login__button round-button" key={5}>
                            Tiếp tục mua hàng
                        </Link>,
                    ]}
                />
            </div>
        </section>
    );
};

export default SummaryComponent;
