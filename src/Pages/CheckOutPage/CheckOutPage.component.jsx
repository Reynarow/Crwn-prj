import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selecCartItems, selectCartItemsPrice } from '../../Redux/cart/cart.selectors';
import CheckoutItems from '../../Components/Checkout-Items/CheckoutItems.component'

import './CheckOutPage.styles.scss';


const CheckOutPage = ({ cartItems, sumItems }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div><div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
                    cartItems.map( cartItem =>
                         <CheckoutItems key={cartItem.id} cartItem={cartItem} />
                        )
                }
        <span className="total"> Total: ${sumItems}</span>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selecCartItems,
    sumItems: selectCartItemsPrice
})


export default connect(mapStateToProps)(CheckOutPage);