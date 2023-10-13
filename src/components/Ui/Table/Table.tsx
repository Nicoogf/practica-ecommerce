import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";

const Table = () => {

    
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
    <>
    
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
    </>
  )
}

export default Table ;