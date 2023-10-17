import  { useEffect, useState } from "react" ;
import Hero from "../../components/Ui/Hero/Hero" ;
import { CardProduct } from "../../components/Ui/CardProduct";
import { getProducts } from "../../services";
import { Product } from "../../interface";
import { Toaster } from "sonner";
import { useQuery } from "react-query";

const Home = () => {

  const { data , isLoading , error } =  useQuery('products' , getProducts)
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
    </>
    ) ;
  } ;

export default Home ;




