import CardCredit from "../../components/Ui/CardCredit/CardCredit";
import Table from "../../components/Ui/Table/Table";

const CheckOut = () => {
  return (
    <div className="p-2 flex flex-col bg-gray-700">
      <h1 className="text-white text-4xl text-center font-bold"> Checkout</h1>
      <div className="grid grid-cols-2 gap-8">

        <div className="flex flex-col justify-between"> 
          <Table />
        </div>

        <div>
          <CardCredit />
        </div>   
      </div>
      <button className="bg-white text-black p-4 rounded-md border-none text-xl font-bold w-[200px] mx-auto"> Buy Now </button>         
    </div>
  ) ; 
} ;

export default CheckOut ;