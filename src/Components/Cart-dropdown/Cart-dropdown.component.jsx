import React from 'react';
import CustomButton from '../Custom-button/Custom-button.compnent'
import './Cart-dropdown.styles.scss';



const CartDropdown = () =>(
    <div className="cart-dropdown">
        <div className="cart-items"> 

        </div>
        <CustomButton>CHECK OUT</CustomButton>
    </div>
)



export default CartDropdown;