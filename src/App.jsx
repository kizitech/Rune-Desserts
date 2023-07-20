import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Routes, Route } from 'react-router-dom';

import Blog from './pages/Blog';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Order from './pages/order';
import About from './pages/About';
import Contact from './pages/Contact';
import Delivery from './pages/Delivery';
import PaymentMethod from './pages/PaymentMethod';
import PaymentSuccessful from './pages/PaymentSuccessful';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { CartProvider } from 'react-use-cart';

function App() {

  return (
    <>

      <NavBar />
<CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/cart" element={<Cart />} /> 
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/payment-successful" element={<PaymentSuccessful />} />
      </Routes>
      </CartProvider>
      <Footer />

    </>
  )
}

export default App





