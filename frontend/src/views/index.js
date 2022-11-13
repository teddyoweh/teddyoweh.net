import React from "react";
import {
  createBrowserRouter,RouterProvider 
} from "react-router-dom";

import 'boxicons';

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./landing";

import ErrorPage from "./errors";

function Views() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      errorElement: <ErrorPage/>,
    },
   
    
    
    
  
  ]);
  return (
    <RouterProvider router={router} />
     
   
       
           


  );
}

export default Views;
