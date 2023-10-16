import CardCredit from "../../components/Ui/CardCredit/CardCredit";
import Table from "../../components/Ui/Table/Table";
import { Toaster } from "sonner";

const CheckOut = () => {
  return (
    <div className="p-2 flex flex-col bg-gray-700">
      <Toaster richColors visibleToasts={1} />
      <h1 className="text-white text-4xl text-center font-bold"> Checkout</h1>
      <div className="grid grid-cols-2 gap-8">

        <div className="flex flex-col justify-between"> 
          <Table />
        </div>

        <div>
          <CardCredit />
        </div>   
      </div>
          
    </div>
  ) ; 
} ;

export default CheckOut ;