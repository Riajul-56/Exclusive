import React, { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} 
from "react-router-dom";
import Rootlayout from './Components/layout/Rootlayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Contact from './Pages/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Shop' element={<Shop />}></Route>
      <Route path='/Sign Up' element={<Signup />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>



    </Route>
  )
);


function App () {
const [count , setCount]=useState(0)
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
