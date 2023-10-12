import { FC } from "react" ;
import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";

interface Props {
    handleShowCartModal : () => void 
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {

  const { state:{cartItems} , dispatch} = useCartContext() ;


  const removeToCart = ( item : CartProduct) => {
    dispatch( {type : "REMOVE_FROM_CART" , payload: item})
  }

  const addToCart = ( item : CartProduct) => {
    dispatch( {type : "ADD_TO_CART" , payload: item})
  }

  const totalPay = () => {
    const total = cartItems.reduce((acc , item) => {
        return acc + item.price * item.quantity
    } , 0)
    return total
  }

 

  return (
    <div className="fixed top-3 right-4 bg-[rgba(0,0,0,0.92)] flex flex-col justify-between items-center p-4 z-50 w-[600px] h-[600px] rounded-3xl">

        <button className=" bg-red-600 text-white font-bold p-2 rounded-lg absolute top-2 right-2" onClick={handleShowCartModal}> 
            Cerrar 
        </button>

        <table className="w-[95%] mt-12">
            <thead>
                <tr>
                    <th> Product </th>
                    <th> Delete </th>
                    <th> Quantity </th>
                    <th> Add </th>
                </tr>
            </thead>

            <tbody>

                {cartItems.map(( item )=> (
                    <tr key = { item.id } >
                    <td className="text-center">  <p> { item.name } </p> </td>
                    <td className="text-center">
                        <button className="bg-yellow-500 px-3 text-center rounded-md"
                                onClick = {() => removeToCart(item)}> 
                         - 1 
                        </button> 
                    </td>
                    <td className="text-center">  <p> { item.quantity } </p> </td>
                    <td className="text-center">
                        <button className="bg-yellow-500 px-3 text-center rounded-md"
                                onClick = {() => addToCart(item)}> 
                                + 1 
                         </button>
                    </td>
                    </tr>
                ))}

                
            </tbody>        
        </table>

        <div>
            <h3> $ {totalPay()}</h3>
        </div>

        <div>
            <button className="bg-yellow-500 px-3 text-center rounded-md py-4 text-yellow-800 font-semibold"> Terminar Compra </button>
        </div>
    </div>
  )
}

export default CartModal