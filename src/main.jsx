import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
const router =createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch("/AllCategory.json"),
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        // loader:cartsProductsLoader,
        
      },
      // {
      //   path:'/appliedJobs',
      //   element:<AppliedJobs></AppliedJobs>,
      //   loader:cartsProductsLoader,
        
      // },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
