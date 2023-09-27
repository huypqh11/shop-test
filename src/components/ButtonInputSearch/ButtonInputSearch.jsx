
import {SearchOutlined} from '@ant-design/icons';
import React from "react";
import InputComponent from "../InputComponents/InputComponent";
import ButtonComponent from "../ButtonComponents/ButtonComponent";

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
            <InputComponent
                size={size} 
                placeholder={placeholder} 
                bordered={bordered} 
                style={{backgroundColor :backgroundColorInput}} 
            />
            <ButtonComponent
                size={size} 
                styleButton={{background: backgroundColorButton, border:!bordered && 'none'}} 
                icon={<SearchOutlined color={colorButton} style={{color:colorButton}}/>}
                styleTextButton={{color:colorButton}}
                textButton={textButton}
            />
    </div>
    );
}
export default ButtonInputSearch;