import React from "react";
import { Col } from "antd";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader,WrapperHeaderAccountText } from "./style";
import Search from "antd/es/input/Search";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
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
                    <UserOutlined style={{fontSize:'30px'}}/>
                    <div>
                        <WrapperHeaderAccountText>Đăng nhập/Đăng ký</WrapperHeaderAccountText>
                        <div>
                            <WrapperHeaderAccountText>Tài Khoản</WrapperHeaderAccountText>
                            <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}}/>
                    <WrapperHeaderAccountText> Giỏ Hàng</WrapperHeaderAccountText>
                </div>
            </Col>
            </WrapperHeader>
        </div>
    );
};
export default HeaderComponent;