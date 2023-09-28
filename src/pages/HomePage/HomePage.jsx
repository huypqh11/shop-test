import  React from 'react';
// import { Row } from 'antd';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';

const HomePage = () => {
    const arr=  ['TV','Tủ lạnh','Máy giặt','Điều hòa','Máy lạnh','Máy nước nóng','Máy rửa chén','Máy hút bụi','Máy sấy quần áo','Máy lọc không khí','Máy rửa chén','Máy hút bụi','Máy sấy quần áo','Máy lọc không khí']
    return (
    <div style ={{padding:'0,120px'}} >
        <WrapperTypeProduct>
            {arr.map((item) => {
                return (
                    <TypeProduct name={item} key={item}/>
                )
            })}
        </WrapperTypeProduct>
        HomePage  
    </div>
    );
};
export default HomePage;