import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contacts from "./pages/contacts/contacts";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Error from "./pages/error/error";
import Products from "./pages/products/products";
import Carts from "./pages/carts/carts";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='header-navbar-wrapper' >
        {/* header section */}
        <header >
          <span>GET 2 FREE SAMPLES WITH ANY $48 PURCHASE </span>
        </header>
        {/* navbar section */}
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
