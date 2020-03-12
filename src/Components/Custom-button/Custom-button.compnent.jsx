import React from 'react';
import {CustomButtonContainer , SpinnerIcon} from './Custom-button-styles';


const CustomButton = ({ isLoading,children,...props}) => (
    <CustomButtonContainer {...props}>
        {
            isLoading? <SpinnerIcon/>:children
        }
     
    </CustomButtonContainer>

);



export default CustomButton;