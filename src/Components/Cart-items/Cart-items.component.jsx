import React from 'react';
import { clearItem } from '../../Redux/cart/cart.action';
import { connect } from 'react-redux';


import './Cart-items.styles.scss';



const CartItems = ({ item, removeItem }) => {
    const { imageUrl, price, name, quantity } = item
    return (
        <div className="wrapper" >
            <div className="cart-item">
                <div className="remove-button" onClick={() => removeItem(item)} >&#x2715; </div>
                <img src={imageUrl} alt="item" />
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price"> {quantity} x ${price}</span>
                </div>

            </div>
            <div className="line"></div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch(clearItem(item))
})


export default connect(null, mapDispatchToProps)(CartItems);