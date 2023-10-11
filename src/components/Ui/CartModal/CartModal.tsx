
const CartModal = ( {handleShowCartModal}) => {
  return (
    <div className="fixed top-3 right-4 bg-[rgba(0,0,0,0.92)] flex flex-col justify-between items-center p-4 z-50 w-[400px] h-[600px] rounded-3xl">

        <button className=" bg-red-600 text-white font-bold p-2 rounded-lg absolute top-2 right-2" onClick={handleShowCartModal}> 
            Cerrar 
        </button>

        <table className="w-[90%] mt-10">
            <thead>
                <tr>
                    <th> Product </th>
                    <th> Delete </th>
                    <th> Quantity </th>
                    <th> Add </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="text-center"> name </td>
                    <td className="text-center">
                        <button className="bg-yellow-500 px-3 text-center rounded-md"> - 1 </button> 
                    </td>
                    <td className="text-center"> 12 </td>
                    <td className="text-center">
                        <button className="bg-yellow-500 px-3 text-center rounded-md"> + 1 </button>
                    </td>
                </tr>
            </tbody>        
        </table>

        <div>
            <h3> Total : 4000,00</h3>
        </div>

        <div>
            <button className="bg-yellow-500 px-3 text-center rounded-md py-4 text-yellow-800 font-semibold"> Terminar Compra </button>
        </div>
    </div>
  )
}

export default CartModal