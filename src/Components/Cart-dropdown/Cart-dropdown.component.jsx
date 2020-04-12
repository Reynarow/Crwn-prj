import React from 'react';
import CustomButton from '../Custom-button/Custom-button.compnent';
import CartItems from '../Cart-items/Cart-items.component';
import { selecCartItems } from '../../Redux/cart/cart.selectors';
import { selectCartItemsPrice } from '../../Redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../Redux/cart/cart.action'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, sumItems, dispatch, isHidden, }) => (

    <div className={`cart-dropdown ${isHidden ? '' : 'show'}`}>
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem} />)

                    :
                    <span className="no-item">there is no item yet reza	&nbsp;:)</span>
            }
        </div>
        <span className="items-price">Total: ${sumItems}</span>

        <Link
            to='/checkout' style={{ width: '100%' }}
             onClick={() => { dispatch(toggleCartHidden()) }} 
            >
            <CustomButton >CHECK OUT</CustomButton>
        </Link>
    </div>


)




const mapStateToProps = createStructuredSelector({
    cartItems: selecCartItems,
    sumItems: selectCartItemsPrice
})


export default withRouter(connect(mapStateToProps)(CartDropdown));