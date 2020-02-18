import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../Redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg.svg';
import './Cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, cartItems }) => (

    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItems.length}</span>

    </div>


)

const mapDispatchToProp = dispatch => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProp = ({ cart }) => ({
    cartItems: cart.cartItems
})

export default connect(mapStateToProp, mapDispatchToProp)(CartIcon);
