import { ConfigProvider, Tabs } from 'antd';
import React, { useState } from 'react';
const { TabPane } = Tabs;
import { HomeOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import './profile.scss';
import AccountDetail from './AccountDetail';
// import DeliveryAddress from './DeliveryAddress';
// import OrderMangement from './OrderManagement';
const tabLabel = [
    {
        name: (
            <>
                <UserOutlined /> Chi tiết tài khoản
            </>
        ),
        key: 0,
        component: AccountDetail,
    },
    // {
    //     name: (
    //         <>
    //             <HomeOutlined /> Địa chỉ đã lưu
    //         </>
    //     ),
    //     key: 1,
    //     component: DeliveryAddress,
    // },
    // {
    //     name: (
    //         <>
    //             <SolutionOutlined /> Quản lý đơn hàng
    //         </>
    //     ),
    //     key: 2,
    //     component: OrderMangement,
    // },
];
const ProfileComponent = () => {
    const [ current, setCurrent ] = useState(0);
    const handleChange = (e) => {
        setCurrent(e);
    };
    ConfigProvider.config({ theme: { primaryColor: "#111111" } });
    return (
        <section className="profile__setting section" id="profile__setting">
            <div className="profile__setting__container container grid">
                <div className="content__title" style={{ margin: '2rem 0' }}>
                    Cài đặt
                </div>
                <ConfigProvider
                >
                    <Tabs
                        tabPosition="left"
                        tabBarStyle={{ width: '400px' }}
                        defaultActiveKey={0}
                        onChange={(e) => handleChange(e)}
                        style={{
                            minHeight: 900,
                        }}
                    >
                        {tabLabel.map((item) => {
                            const Component = item.component;
                            return (
                                <TabPane tab={item.name} key={item.key}>
                                    <Component current={current} />
                                </TabPane>
                            );
                        })}
                    </Tabs>
                </ConfigProvider>
            </div>
        </section>
    );
};

export default ProfileComponent;
