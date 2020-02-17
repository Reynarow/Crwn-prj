import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../Redux/cart/cart.action'
import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg.svg';
import './Cart-icon.styles.scss';


const CartIcon = ({toggleCartHidden}) =>(

    <div className="cart-icon" onClick = {toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>

    </div>


)

const mapDispatchToProp = dispatch =>({

    toggleCartHidden: () =>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProp)(CartIcon);
