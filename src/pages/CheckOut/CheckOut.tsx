import Table from "../../components/Ui/Table/Table";

const CheckOut = () => {
  return (
    <div className="m-[2rem] flex flex-col bg-gray-700">
      <h1 className="text-white text-xl"> Checkout</h1>
      <div className="grid grid-cols-2 gap-8">

        <div className="flex flex-col justify-between"> 
          <Table />
        </div>

        <div>
        {/* Formulario tarjeta */ }
        </div>   
      </div>
      <button className="bg-white text-black p-4 rounded-md border-none text-xl font-bold"> Buy Now </button>         
    </div>
  ) ; 
} ;

export default CheckOut ;