import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const navigate = useNavigate() ;

    useEffect(()=> {
        const userLogin = localStorage.getItem("userLogin")
        if( !userLogin ) {
            navigate("/login")
        } 
    } , [])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white h-screen gap-4">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold text-center">Dashoboard</h1>
            <button className="text-yellow-800 bg-yellow-500 px-4 py-2 rounded-lg font-bold">  Logout </button>
        </div>

        <form className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <label htmlFor="aniboSeries"> Anibo Series </label>
                <input  className="p-2 rounded-lg text-black"type="text" id="aniboSeries" name="aniboSeries" value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="character"> Character </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="character" name ="character"value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="gameSeries"> Game Series </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="gameSeries" name ="gameSeries" value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="head"> Head </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="head" name="head" value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="image"> Image </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="image" name="image" value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="name"> Name </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="name" name="name" value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="release"> Fecha de Lanzamiento </label>
                <input className="p-2 rounded-lg  text-black" type="date" id="release" name="release"value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="tail"> Tail </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="tail" name="tail "value={''} onChange={()=>{}} required />
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="type"> Type </label>
                <input className="p-2 rounded-lg  text-black" type="text" id="type" name="type" value={''} onChange={()=>{}} required/>
            </div>

            <div className="flex flex-row justify-between items-center">
                <label htmlFor="price"> Price </label>
                <input className="p-2 rounded-lg  text-black" type="number" id="price" name="price" value={''} onChange={()=>{}} required />
            </div>

            <div className="flex justify-center items-center">
                <button type="submit"  className="text-yellow-800 bg-yellow-500 px-4 py-2 rounded-lg font-bold">Agregar Producto</button>
            </div>

        </form>
    </div>
  )
}

export default Dashboard