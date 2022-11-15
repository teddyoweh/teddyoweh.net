import React from "react";
import {
  createBrowserRouter,RouterProvider 
} from "react-router-dom";

import 'boxicons';

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./landing";
import AboutPage from "./about";
import OpenSourcePage from "./opensource";
import ResearchPage from "./research";
import ErrorPage from "./errors";
import ContactPage from "./contact";
 
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
    },
    {
      path: "/contact",
      element:<ContactPage/>,
      },
      {
        path: "/opensource",
        element:< OpenSourcePage/>,
        },
      
      
   
   
    
    
    
  
  ]);
  return (
    <RouterProvider router={router} />
     
   
       
           


  );
}

export default Views;
