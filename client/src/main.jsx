import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import './index.css'
import Login from './components/Login.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
const router=createBrowserRouter([{
  path:"/login",
  element:<Login/>
},
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"/products",
        element:<Product/>
      },{
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
