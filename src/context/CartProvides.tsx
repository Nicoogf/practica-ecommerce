import {  FC, useReducer , ReactNode} from "react" ;
import { cartReducer, initialState } from "./CartReducer";
import CartContext from "./CartContext";

/**
 * 
 */

interface CartProviderProp {
    children : ReactNode ;
}

export const CartProvider : FC<CartProviderProp>= ( {children} ) => {
     const [ state, dispatch ] = useReducer( cartReducer , initialState)

     return(

        <CartContext.Provider value={{ state , dispatch }} >
            { children }
        </CartContext.Provider>
     )
}