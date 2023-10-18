import { Product, Products } from "../interface" ;

export const getProducts = async ( page = 0 ):Promise<Products[]> => {
    try {
      const response = await fetch(`http://localhost:3000/products?_page=${page}&_limit=24`);

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


  export const createProduct = async( product : Product) : Promise<Product> => {
    try{
        const response = await fetch ( `http://localhost:3000/products` , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( product )
        })

        if(response.ok) {
            const data = await response.json()
            return data
        }else{
            throw new Error ( 'Fail create Product')
        }
    }catch(error){
        throw new Error('Network Error')
    }
  }