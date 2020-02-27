import React from 'react';
import CustomButton from '../Custom-button/Custom-button.compnent';
import CartItems from '../Cart-items/Cart-items.component';
import { selecCartItems } from '../../Redux/cart/cart.selectors';
import { selectCartItemsPrice } from '../../Redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../Redux/cart/cart.action'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import './Cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, sumItems, history, dispatch }) => (

    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem} />)
                    :
                    <span className="no-item">there is no item yet reza :)</span>
            }
        </div>
        <span className="items-price">Total: ${sumItems}</span>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
         }
        }
        >CHECK OUT</CustomButton>


    </div>


)




const mapStateToProps = createStructuredSelector({
    cartItems: selecCartItems,
    sumItems: selectCartItemsPrice
})


export default withRouter(connect(mapStateToProps)(CartDropdown));