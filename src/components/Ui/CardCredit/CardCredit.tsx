import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';


const CardCredit = () => {
  return (
    <div className='flex flex-col items-center rounded-xl pb-5 gap-4'>
        <div>
           <Cards 
            number = {""} 
            name = {""} 
            expiry  = {""} 
            cvc= {""}  
            focused = {""} />
        </div>

        <form>
            <div className='flex flex-col items-start w-full'>
                <label htmlFor="number" className='text-md font-semibold text-white my-4 mx-2'> Card Number </label>
                <input type = "text " name ="number" id = "number" className=' block w-full p-2 border-b-2 border-blue-500 text-white rounded-lg'/>
            </div>

            <div className='flex flex-col items-start w-full'>
                <label htmlFor="name" className='text-md font-semibold text-white my-4 mx-2'> Card Name </label>
                <input type = "text " name ="name" id = "name" className=' block w-full p-2 border-b-2 border-blue-500 text-white rounded-lg'/>
            </div>

            {/* grupo  */}
            <div className='grid grid-cols-2 gap-2'>

                 <div className='flex flex-col items-start w-full'>
                    <label htmlFor="expiry" className='text-md font-semibold text-white my-4 mx-2'> Vencimiento </label>
                    <input type = "text " name ="expiry" id = "expiry" className=' block w-full p-2 border-b-2 border-blue-500 text-white rounded-lg'/>
                </div>

                <div className='flex flex-col items-start w-full'>
                    <label htmlFor="cvc" className='text-md font-semibold text-white my-4 mx-2'> Codigo de Seguridad </label>
                    <input type = "text " name ="cvc" id = "cvc" className=' block w-full p-2 border-b-2 border-blue-500 text-white rounded-lg'/>
                </div>      

            </div>
        </form>
    </div>
  )
}

export default CardCredit ;