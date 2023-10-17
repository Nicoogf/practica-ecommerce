import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [ userData , setUserData ] = useState ({
    email: "",
    password: ""
  }) ;

  const handleChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
      setUserData({
        ...userData ,
        [e.target.name] : e.target.value ,        
      })
  }

  const navigate = useNavigate ()

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() ; 
    if( userData.email.trim() === '' || userData.password.trim() === ''){
      return ; 
    }

    localStorage.setItem(
      'userLogin',
      JSON.stringify(userData.email)
    )
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-8"> Login </h1>
      <form action="" onSubmit={handleSubmit}>

       {/*email*/}
        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="email" className="mb-4 text-lg"> Email </label>
          <input className="p-4 border-2 border-gray-300 text-md rounded-lg text-black" type="email" id='email' name="email" value={ userData.email } onChange={handleChange}/>
        </div>

         {/*pass*/}
         <div className="flex flex-col mb-8 w-full ">
          <label htmlFor="password" className="mb-4"> Password </label>
          <input className="p-4 border-2 border-gray-300 text-md rounded-lg text-black" type="password" id='password' name='password' value={ userData.password} onChange={handleChange}/>
        </div>

        <div className="flex flex-col mb-4 w-full">
          <button type='submit' className="bg-yellow-500 text-yellow-900 py-3 px-6 rounded-lg">Loguear </button>
        </div>

      </form>
    </div>
  )
}

export default Login