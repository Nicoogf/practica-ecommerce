import { CartProduct } from "../interface"

/**
 * initialState = OBJETO que tiene la propiedad de cartItems
 * cartItems = ARRAY que tiene los articulos del carrito
 * state = OBJETO que recibe la funcion por parametro 
 * action = OBJETO que contiene 
 *          type ( tipo de accion - AGREGAR_CARRITO ) 
 *          payload ( donde llega la informacion - producto)
 * 
 * existingItem = BOOLEANO que comprueba si el item existe o no el carrito
 * 
 * itemToRemove = BOOLEANO que comprueba si el item a eliminar esta dentro delcarrito
 */
export interface CartState {
    cartItems : CartProduct[]
}

export const initialState : CartState = {
    cartItems : []
}

export interface CartAction {
    type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
    payload :  CartProduct
}


export const cartReducer = ( state: CartState , action: CartAction ) : CartState =>{
    switch ( action.type ) {


        case "ADD_TO_CART" : {
            const { id } =  action.payload 
            
            //validar que el item ya existe en el carrito

            const existingItem = state.cartItems.find( (item) => item.id === id )

            if( existingItem ){

            // Retorna el mismo estado y si el item coincide con el id que llega por el payload le suma 1 a su propiedad quantity    
                return {
                    ...state ,
                    cartItems : state.cartItems.map((item)=> item.id === id ? {...existingItem , quantity: existingItem.quantity + 1  } : item) 
                }
            }else{
                return{
                    ...state ,
                    cartItems : [ ...state.cartItems , action.payload] 
                }
            }

        } 

        case "REMOVE_FROM_CART" : {
            const { id : removeItemID  } = action.payload ;

            //validacion si existe el item

            const itemToRemove = state.cartItems.find( ( item ) => item.id === removeItemID )

           if ( itemToRemove ){
                if( itemToRemove.quantity === 1 ) {
                    return{
                        ...state ,
                        cartItems : state.cartItems.filter( (item) => item.id !== removeItemID)
                    }
                } else {
                    return{
                        ...state ,
                        cartItems : state.cartItems.map( (item) => item.id === removeItemID ? {...itemToRemove , quantity : itemToRemove.quantity - 1 } : item)
                    }
                }
           }

           return state
        }
        
        case "CLEAR_CART" : {
            return {
                ...state,
                cartItems : []
            }
        }

        default:
            return state ;
    }
}
