import { ADD_ITEM, REMOVE_ITEM, SET_CART } from "./actionTypes";

export const addItem = (item) => {
    return{
        type: ADD_ITEM,
        payload: item,
    }
}

export const removeItem = (item) => {
    return{
        type: REMOVE_ITEM,
        payload: item,
    }
}

export const setCart = () => {
    return{
        type: SET_CART,
    }
}