import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom"
import { Product } from "../../interface";
import { createProduct } from "../../services";

const Dashboard = () => {

    const [ product, setProduct ] = useState ({
        aniboSeries : "" ,
        character : "" ,
        gameSeries : "" ,
        head : "" ,
        image : "" ,
        name : "" ,
        releaseData : "" ,
        tail : "" ,
        type : "" ,
        price : 0
    })

    const navigate = useNavigate() ;

    useEffect(()=> {
        const userLogin = localStorage.getItem("userLogin")
        if( !userLogin ) {
            navigate("/login")
        } 
    } , [])

    const handleLogout = () => {
        localStorage.removeItem("userLogin") ;
        navigate("/login")
    }

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement>)  =>{
         setProduct({
            ...product,
            [e.target.name] : e.target.value
         })
    }

    const mutation = useMutation(( newProduct: Product ) => {
        return createProduct(newProduct)
    })

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() ;
        mutation.mutate(product)
    }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white h-screen gap-4">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold text-center">Dashoboard</h1>
            <button onClick={ handleLogout }className="text-yellow-800 bg-yellow-500 px-4 py-2 rounded-lg font-bold">  Logout </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between items-center">
                <label htmlFor="aniboSeries"> Anibo Series </label>
                <input  className="p-2 rounded-lg text-black"type="text" id="aniboSeries" name="aniboSeries" value={ product.aniboSeries} onChange={handleChange} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="character"> Character </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="character" name ="character"value={ product.character} onChange={handleChange} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="gameSeries"> Game Series </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="gameSeries" name ="gameSeries" value={ product.gameSeries} onChange={handleChange} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="head"> Head </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="head" name="head" value={ product.head} onChange={handleChange} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="image"> Image </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="image" name="image" value={ product.image} onChange={handleChange} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="name"> Name </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="name" name="name" value={ product.name } onChange={handleChange} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="releaseData"> Fecha de Lanzamiento </label>
                <input className="p-2 rounded-lg  text-black" type="date" id="releaseData" name="releaseData"value={ product.releaseData} onChange={handleChange} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="tail"> Tail </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="tail" name="tail" value={ product.tail} onChange={handleChange} required/>
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="type"> Type </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="type" name="type" value={ product.type} onChange={handleChange} required/>
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="price"> Price </label>
                <input className="p-2 rounded-lg  text-black" type="number" id="price" name="price" value={ product.price} onChange={handleChange} required />
            </div>

            <div className="flex justify-center items-center">
                <button type="submit"  className="text-yellow-800 bg-yellow-500 px-4 py-2 rounded-lg font-bold">Agregar Producto</button>
            </div>

        </form>
    </div>
  )
}

export default Dashboard