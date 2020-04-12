import { cartActionTypes } from './cart.types';


export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGEL_CARD_HIDDEN
})


export const addItems = (item) => ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item
})

export const clearItem = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_STATE,
    payload: item
})

export const removeItem = (item) => ({
    type:cartActionTypes.REMOVE_ITEM,
    payload:item

})


export const clearCart = () =>({
    type:cartActionTypes.CLEAR_CART
})