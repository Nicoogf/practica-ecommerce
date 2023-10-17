import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutMain from './components/Layouts/LayoutMain.tsx'
import './index.css'

import Home from './pages/Home/Home.tsx'
import { CartProvider } from './context/CartProvides.tsx'
import CheckOut from './pages/CheckOut/CheckOut.tsx'
import { QueryClient ,QueryClientProvider } from 'react-query'
import Login from './pages/Login/Login.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'

const queryClient =  new QueryClient() ;

const router = createBrowserRouter([
      {
          path: '/' ,
          element : <LayoutMain />,
          children: [
            { index : true , element : <Home /> },
            { path : "/checkout" , element : <CheckOut />} 
          ]
      },
      {
        path: "/login", element: <Login />
      } ,
      {
        path: "/dashboard", element: <Dashboard />
      } 

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={ router } />    
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
