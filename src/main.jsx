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
import JobDetails from './components/JobDetails';
import ErrorPage from './components/ErrorPage';
import cartsProductsLoader from './components/Loders/Loders';
const router =createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch("/AllCategory.json"),
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader: ()=>fetch ("/AssigmentMarks.json")
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:cartsProductsLoader,
        
      },
      {
        path:'/jobDetails/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch("/AllFeatures.json"),
        
        
      },
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
