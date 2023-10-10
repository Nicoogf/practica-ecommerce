import Logo  from "../../../assets/logo.png" ; 
import Carrito  from "../../../assets/carrito.png" ;


const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 text-white flex flex-row justify-around w-full">
        <div className="flex flex-row items-center gap-2 cursor-pointer">
            <img className='w-[70px]'src={Logo} alt='Logo de la practica'/>
            <span className="font-semibold text-xl"> E-Commerce </span>
        </div>

        <div className="relative cursor-pointer border-2 border-gray-600 p-1 rounded-3xl">
            <p className="absolute bg-red-600 px-2 rounded-full -top-3 -right-3"> 7 </p>
            <img className='w-[70px]' src={Carrito} alt='Carrito de compras'/>
        </div>
    </nav>
  )
}

export default Navbar ;