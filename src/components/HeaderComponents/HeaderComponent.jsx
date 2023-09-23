import React from "react";
import { Col } from "antd";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader } from "./style";
import Search from "antd/es/input/Search";
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>Qhuy dep trai</WrapperTextHeader>
                </Col>
                <Col span={12}>
                {/* <Search
                placeholder="input search text"
                //allowClear
                enterButton="Search"
                size="large"
                //onSearch={onSearch}
                /> */}
            <Search placeholder="input search text" 
            //onSearch={onSearch} 
            enterButton
            />
            </Col>
            <Col span={6}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize:30}}/>
                    <div>
                        <span>Đăng nhập/Đăng ký</span>
                        <div>
                            <span>Tài Khoản</span>
                            <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
            </Col>
            </WrapperHeader>
        </div>
    );
};
export default HeaderComponent;