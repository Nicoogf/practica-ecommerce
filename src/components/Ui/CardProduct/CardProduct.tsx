/**
 * 
 * product => es el objeto indivitual recibido en el prop
 */

import { FC, useContext } from "react";
import CartContext from "../../../context/CartContext";
import { CartProduct, Product  } from "../../../interface";


interface Props  {
  product : Product[]
}



const CardProduct: FC<Props> = ( { product } ) => {

    
  const { dispatch } = useContext( CartContext ) ;

  const item : CartProduct = {
    id: product.id ,
    name : product.name ,
    image: product.image,
    quantity : 1
  }

  const addToCart = ( item : CartProduct ) => {
    dispatch( {type: "ADD_TO_CART" , payload :item})
  }

  return (

    <div className="bg-blue-500 rounded-2xl flex flex-col items-center justify-center relative h-96 w-full before:bg-[rgba(0, 88, 254, 50%)] before:rounded-lg before:clip-circle before:left-0 before:top-0 before:absolute before:w-full before:h-full before:transition-transform before:duration-500 before:ease-in-out ">

        <img  className= "mb-4 object-contain absolute top-20 -translate-y-2/5 z-10 w-20" src={product.image} alt={product.name} />        

        <div className="absolute bottom-0 flex flex-col items-center justify-center">

            <h3 className="text-white text-2xl font-bold my-2 text-center">
                { product.name }
            </h3>

            <div className="flex justify-between w-full">

                <p className="text-white text-base">
                { product.type }
                </p>

                <p className="text-white text-base"> 
                    $  { product.price } <small> , 00 </small>
                </p>

            </div>

            <button 
            onClick = { () => addToCart(item)}
            className="bg-yellow-400 hover:bg-yellow-500 rounded-lg text-yellow-700 cursor-pointer text-md font-bold my-2 mx-auto py-1 px-3 text-center uppercase transition duration-500 ease-in-out w-40"> 
                Agregar al carrito 
            </button>

        </div>        

    </div>
  )
}

export default CardProduct ;