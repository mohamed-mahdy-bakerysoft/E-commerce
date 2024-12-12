
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Product from './Pages/Product.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Cart from './Pages/Cart.jsx'
import Layout from './Componets/Layout/Layout.jsx'
import PageNotFound from "./Pages/PageNotFound.jsx";

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} errorElement={<PageNotFound/>}>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
)

function App() {

  return (
    <div className="App">
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
