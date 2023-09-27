import React from "react";
import { Col } from "antd";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader,WrapperHeaderAccountText } from "./style";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>fvh </WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch 
                    size="large" 
                    bordered={false} 
                    placeholder="input search text" 
                    textButton="tìm kiếm"/>
            </Col>
            <Col span={6} style={{display:'flex', gap:'20px', alignItems:'center'}}>
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