import { createSelector } from 'reselect';



const selectCart = state => state.cart;


export const selecCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selecCartItemsCount = createSelector(
    [selecCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
    )
)

export const selectCartItemsPrice = createSelector(
    [selecCartItems] , 
    cartItems => cartItems.reduce(
            (accumalatedPrise ,cartItem) => cartItem.quantity * cartItem.price + accumalatedPrise, 0
        )
)