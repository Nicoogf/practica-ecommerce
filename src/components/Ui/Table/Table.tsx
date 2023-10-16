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
                    <th className="text-white"> Product </th>
                    <th className="text-white"> Delete </th>
                    <th className="text-white"> Quantity </th>
                    <th className="text-white"> Add </th>
                </tr>
            </thead>

            <tbody>

                {cartItems.map(( item )=> (
                    <tr key = { item.id } >
                    <td className="text-center text-white p-2">  <p> { item.name } </p> </td>
                    <td className="text-center text-white p-2">
                        <button className="bg-yellow-500 px-3 text-center rounded-md "
                                onClick = {() => removeToCart(item)}> 
                         - 1 
                        </button> 
                    </td>
                    <td className="text-center text-white p-2">  <p> { item.quantity } </p> </td>
                    <td className="text-center text-white p-2">
                        <button className="bg-yellow-500 px-3 text-center rounded-md "
                                onClick = {() => addToCart(item)}> 
                                + 1 
                         </button>
                    </td>
                    </tr>
                ))}

                
            </tbody>        
    </table>

        <div>
            <h3 className="text-2xl text-center font-semibold text-white my-8"> Total : $ {totalPay()}</h3>
        </div>
    </>
  )
}

export default Table ;