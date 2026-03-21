import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./composants/Layout";
import Home from "./pages/Home";
import About from "./composants/About";
import Projects from "./composants/Projects";
import Contact from './composants/Contact';


function App() {

  const router = createBrowserRouter([
    {
      
      element: <Layout />, 
      children: [ 
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> }
      ],
      
    },
     
  ]);
 

  return (
  <RouterProvider router={router} />
  )
}

export default App;