import { Button, Input } from "antd";
import {SearchOutlined} from '@ant-design/icons';
import React from "react";

const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textButton,bordered, 
        backgroundColorInput= '#fff',
        backgroundColorButton= 'rgb(13,92,182',
        colorButton = '#fff'
    } 
        
    = props;
  return(
    <div style={{display:'flex'}}>
            <Input 
                size={size} 
                placeholder={placeholder} 
                bordered={bordered} 
                style={{backgroundColor :backgroundColorInput}} 
            />
            <Button 
                size={size} 
                bordered={false} 
                style={{background: backgroundColorButton, border:!bordered && 'none'}} 
                icon={<SearchOutlined color={colorButton} style={{color:colorButton}}/>}
            ><span style={{color:colorButton}}>{textButton}</span></Button>
    </div>
    );
}
export default ButtonInputSearch;