import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { toast } from 'sonner'
import useCartContext from '../../../hooks/useCartContext';
import { CartProduct } from '../../../interface';


const CardCredit = () => {

  const [cardData, setCardData] = useState({
    number:"",
    name:"",
    expiry :"",
    cvc : "",
    focus : ""
  }) ;

  const { dispatch } = useCartContext();

  const { number , name ,expiry , cvc  } = cardData;

  const handleInputChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
        setCardData({...cardData , [e.target.name] : e.target.value})
  }

  const handleInputFocus = ( e : React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focus : e.target.name
        })
  }

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //valida que los campos no esten vacios
   

    if([number , name ,expiry , cvc].includes("")){
        // Mostrar error / alert
        toast.error("Todos los campos son obligatorios")
        return
    }
    setCardData({
        number : "" ,
        name : "" ,
        expiry : "" ,
        cvc: "",
        focus : ""
    })

    dispatch( {type : "CLEAR_CART" , payload: {} as CartProduct} )
  }

  return (
    <div className='flex flex-col items-center rounded-xl pb-5 gap-4'>
        <div>
           <Cards 
            number = { number } 
            name = { name } 
            expiry  = { expiry} 
            cvc= { cvc }  
            focused = { cardData.focus as any  } />
        </div>

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-start w-full'>
                <label htmlFor="number" className='text-md font-semibold text-white my-4 mx-2'> Card Number </label>
                <input  onFocus= { handleInputFocus } value={ number } onChange={handleInputChange} type = "text " name ="number" id = "number" className=' block w-full p-2 border-b-2 border-blue-500 text-black rounded-lg'/>
            </div>

            <div className='flex flex-col items-start w-full'>
                <label htmlFor="name" className='text-md font-semibold text-white my-4 mx-2'> Card Name </label>
                <input onFocus= { handleInputFocus } value={ name } onChange={handleInputChange} type = "text " name ="name" id = "name" className=' block w-full p-2 border-b-2 border-blue-500 text-black rounded-lg'/>
            </div>

            {/* grupo  */}
            <div className='grid grid-cols-2 gap-2'>

                 <div className='flex flex-col items-start w-full'>
                    <label htmlFor="expiry" className='text-md font-semibold text-white my-4 mx-2'> Vencimiento </label>
                    <input onFocus= { handleInputFocus } value={ expiry } onChange={handleInputChange} type = "text " name ="expiry" id = "expiry" className=' block w-full p-2 border-b-2 border-blue-500 text-black rounded-lg'/>
                </div>

                <div className='flex flex-col items-start w-full'>
                    <label htmlFor="cvc" className='text-md font-semibold text-white my-4 mx-2'> Codigo de Seguridad </label>
                    <input onFocus= { handleInputFocus } value={ cvc } onChange={handleInputChange} type = "text " name ="cvc" id = "cvc" className=' block w-full p-2 border-b-2 border-blue-500 text-black rounded-lg'/>
                </div>      

            </div>
            <button type='submit' className="block bg-yellow-400 text-yellow-800-white p-4 border-none text-xl font-bold w-[200px] mt-8 mx-auto rounded-xl"> Buy Now </button>     
        </form>
    </div>
  )
}

export default CardCredit ;