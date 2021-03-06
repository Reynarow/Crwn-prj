import React from 'react';
import { connect } from 'react-redux';
import {selecCartItemsCount} from '../../Redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import { toggleCartHidden } from '../../Redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg.svg';
import './Cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount}) => (

    <div className="cart-icon" onMouseUp={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    
    </div>


)

const mapDispatchToProps = dispatch => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector ({
   itemCount: selecCartItemsCount
    
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
