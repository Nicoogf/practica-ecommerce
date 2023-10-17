import  { useEffect, useState } from "react" ;
import Hero from "../../components/Ui/Hero/Hero" ;
import { CardProduct } from "../../components/Ui/CardProduct";
import { getProducts } from "../../services";
import { Product } from "../../interface";
import { Toaster } from "sonner";
import { useQuery } from "react-query";

const Home = () => {
  const [ page , setPage ]  = useState( 1 )

  const { data , isLoading , error } =  useQuery(['products' , page ] , () =>  getProducts( page ) , {keepPreviousData : true} )
/**
 *  
 * const [ products, setProducts] = useState<Product[]>([]); 
  const [ error , setError ] = useState( false ) 
  const [ isLoading, setIsLoading ] = useState( true ) ;


  useEffect(() => {
    getProducts().then((data) => {
      setProducts( data )
    }).catch(() => {
      setError(true)
    }).finally(()=>{
      setIsLoading( false )
    });
  }, []);

 */
 


  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p className="bg-gray-600 text-white h-[50vh]">Cargando Pagina...</p>}
      {error && <p>Ocurrio un error</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-5 gap-4 p-16 md:p-24 lg:p-32 bg-gray-600">
        { data?.map ( (product)=> (
          <CardProduct key={product.tail} product={ product }/>
        ))}
      </div>

      <div className="bg-gray-900 flex flex-row items-center justify-center gap-6 py-4">
        <button onClick={() => setPage( page - 1 )}
                disabled={ page === 1}
                className="p-4 bg-yellow-500 text-yellow-800 text-center font-bold rounded-lg"> Previus Page </button>
        <div>
          <span className="text-white font-bold text-2xl text-center p-3 bg-gray-700 rounded-full border-2 border-yellow-500"> { page } </span>
        </div>
        <button onClick={() => setPage( page + 1 )}
               
                className="p-4 bg-yellow-500 text-yellow-800 text-center font-bold rounded-lg"> Next Page </button> 
      </div>
    </>
    ) ;
  } ;

export default Home ;




