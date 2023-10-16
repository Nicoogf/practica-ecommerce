import { FC } from "react";
import Table from "../Table/Table";
import { useNavigate } from "react-router-dom";

interface Props {
    handleShowCartModal : () => void 
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {

  const navigate = useNavigate() ;

  const handleNavigate = () =>{
     navigate("/checkout")
     handleShowCartModal()
  }


 

  return (
    <div className="fixed top-3 right-4 bg-[rgba(0,0,0,0.92)] flex flex-col justify-between items-center p-4 z-50 w-[600px] h-[600px] rounded-3xl">

        <button className=" bg-red-600 text-white font-bold p-2 rounded-lg absolute top-2 right-2" onClick={handleShowCartModal}> 
            Cerrar 
        </button>

        <Table />


        <div>
            <button className="bg-yellow-500 px-3 text-center rounded-md py-4 text-yellow-800 font-semibold" onClick={ handleNavigate }> Terminar Compra </button>
        </div>
    </div>
  )
}

export default CartModal