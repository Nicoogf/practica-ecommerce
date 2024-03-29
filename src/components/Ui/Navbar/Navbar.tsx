import Logo  from "../../../assets/logo.png" ; 
import Carrito  from "../../../assets/carrito.png" ;
import { useState } from "react";
import { CartModal } from "../CartModal";
import useCartContext from "../../../hooks/useCartContext";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * 
 * showModal => Booleano que controla mostrar/Ocultar Menu
 * setShowModal => Funcion modificadora
 */


const Navbar = () => {

  const [ showModal , setShowModal] = useState( false ) ; 

  const handleShowCartModal = () => {
    setShowModal( prevState => !prevState)
  }

  const { state :{cartItems}} = useCartContext()

  const navigate = useNavigate() ; 

  const location = useLocation() ;

  const handleNavigateToHome = () => {
    navigate("/")
  }

  return (
    <nav className="bg-gray-800 py-4 text-white flex flex-row justify-between w-full">
        <div className="flex flex-row items-center gap-2 cursor-pointer ml-8" onClick={handleNavigateToHome}>
            <img className='w-[70px]'src={Logo} alt='Logo de la practica'/>
            <span className="font-semibold text-xl"> E-Commerce </span>
        </div>

        { location.pathname !== "/checkout" && (
          <>
             <div className="relative cursor-pointer border-2 border-gray-600 p-1 rounded-3xl mr-8">
                <p className="absolute bg-red-600 px-2 rounded-full -top-3 -right-3"> 
                  {cartItems.length}
                </p>
                <img className='w-[55px]' src={Carrito} alt='Carrito de compras' onClick={handleShowCartModal}/>
            </div>
            { showModal && <CartModal handleShowCartModal={handleShowCartModal}/>}
          </>
        )}

       
    </nav>
  )
}

export default Navbar ;