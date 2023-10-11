import { Products } from "../interface" ;

export const getProducts = async ():Promise<Products[]> => {
    try {
      const response = await fetch('http://localhost:3000/products');

        if( response.ok ){
            const data = await response.json();
            return(data);
        } else {
            throw new Error ( 'Fallo el fetch de productos')
        }
     
    } catch (error) {
        throw new Error ( ' Error de connexion ')
    }
  };
