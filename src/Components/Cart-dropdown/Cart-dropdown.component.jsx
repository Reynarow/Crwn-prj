import React, { useEffect, useRef } from 'react';
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


const CartDropdown = ({ cartItems, sumItems, dispatch, isHidden }) => {

    const node = useRef();

    

    useEffect(() => {
        const handleClick = (event) => {
            if (node.current.contains(event.target)) {
                return
            }
          dispatch(toggleCartHidden())
        }
        

        if(isHidden){
            document.addEventListener('click',handleClick)
        }else{
            document.removeEventListener("click", handleClick)
        }
     
        return () => {
            document.removeEventListener("click", handleClick)
        };
    }, [isHidden,dispatch])

   
  

  

    return (
        
        <div ref={node} className={'cart-dropdown '}>
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
                to='/checkout' style={{width:'80%'}}
                onClick={() => { dispatch(toggleCartHidden()) }}
            >
                <CustomButton style={{width:'100%'}} >CHECK OUT</CustomButton>
            </Link>
        </div>

    )
}




const mapStateToProps = createStructuredSelector({
    cartItems: selecCartItems,
    sumItems: selectCartItemsPrice,

})


export default withRouter(connect(mapStateToProps)(CartDropdown));