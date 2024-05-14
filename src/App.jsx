import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contacts from "./pages/contacts/contacts";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Error from "./pages/error/error";
import Carts from "./pages/carts/carts";
import Gallery from "./pages/gallery/gallery";
import Nail from './pages/products/nail';
import Jewellry from './pages/products/jewellry';
import Makeup from './pages/products/makeup';
import Skin from './pages/products/skin';
import Weddingkits from './pages/products/weddingkits';
import Hair from './pages/products/hair';
import Checkout from "./pages/checkout/checkout";
import { CartProvider } from "./context/cartContext";

import './App.css';

function App() {
  return (
    <CartProvider>
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
          <Route path="/products/nail" element={<Nail />} />
          <Route path="/products/jewellry" element={<Jewellry />} />
          <Route path="/products/makeup" element={<Makeup />} />
          <Route path="/products/skin" element={<Skin />} />
          <Route path="/products/weddingkits" element={<Weddingkits />} />
          <Route path="/products/hair" element={<Hair />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
