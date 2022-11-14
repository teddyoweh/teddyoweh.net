import React from "react";
import {
  createBrowserRouter,RouterProvider 
} from "react-router-dom";

import 'boxicons';

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./landing";
import AboutPage from "./about";
import ResearchPage from "./research";
import ErrorPage from "./errors";

function Views() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      errorElement: <ErrorPage/>,
    },
    
    {
    path: "/about",
    element:<AboutPage/>,
    },
    {
      path: "/research",
      element:<ResearchPage/>,
      }
   
   
    
    
    
  
  ]);
  return (
    <RouterProvider router={router} />
     
   
       
           


  );
}

export default Views;
