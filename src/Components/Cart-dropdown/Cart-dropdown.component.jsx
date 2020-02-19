import React from 'react';
import CustomButton from '../Custom-button/Custom-button.compnent';
import CartItems from '../Cart-items/Cart-items.component';
import { selecCartItems } from '../../Redux/cart/cart.selectors';
import { selectCartItemsPrice } from '../../Redux/cart/cart.selectors'
import './Cart-dropdown.styles.scss';
import { connect } from 'react-redux';



const CartDropdown = ({ cartItems, sumItems }) => (

    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem} />)}
        </div>
        <span className="items-price">Sum: ${sumItems}</span>
        <CustomButton>CHECK OUT</CustomButton>


    </div>


)




const mapStateToProps = (state) => ({
    cartItems: selecCartItems(state),
    sumItems: selectCartItemsPrice(state)
})


export default connect(mapStateToProps)(CartDropdown);