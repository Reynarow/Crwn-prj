import React from 'react';
import CustomButton from '../Custom-button/Custom-button.compnent';
import CartItems from '../Cart-items/Cart-items.component';
import './Cart-dropdown.styles.scss';
import { connect } from 'react-redux';



const CartDropdown = ({cartItems}) =>(
    
    <div className="cart-dropdown">
        <div className="cart-items"> 
            {cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem} /> )}
        </div>
        <CustomButton>CHECK OUT</CustomButton>
        
        
    </div>
   
    
)




const mapStateToProps = ({cart: {cartItems}}) =>({
    cartItems
})


export default connect(mapStateToProps)(CartDropdown);