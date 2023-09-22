import React from "react";
import { Col } from "antd";
import { WrapperHeader, WrapperTextHeader } from "./style";
import Search from "antd/es/input/Search";

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
                <Col span={6}>col-8</Col>
            </WrapperHeader>
        </div>
    );
};
export default HeaderComponent;