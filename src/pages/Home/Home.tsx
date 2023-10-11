import  { useEffect, useState } from "react" ;
import Hero from "../../components/Ui/Hero/Hero" ;
import { CardProduct } from "../../components/Ui/CardProduct";

const Home = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-5 gap-4 p-16 md:p-24 lg:p-32 bg-gray-600">
        { products.map ( (product)=> (
          <CardProduct key={product.tail} product={ product }/>
        ))}
      </div>
    </>
    ) ;
  } ;

export default Home ;




