import React from "react";
import "./sass/mainStyles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Blog, Menu, Cart, Home, About, Contact, Delivery, OrderDessert, PaymentMethod, AppetizerOrder,VeganDessertOrder, PaymentSuccessful, SpecialDessertOrder } from "./pages";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";

import DataProvider from "/src/components/DataProvider.jsx";

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <NavBar />
          <ScrollRestoration />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/menu/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu/delivery" element={<Delivery />} />
            <Route path="/menu/payment-method" element={<PaymentMethod />} />
            <Route path="/menu/order-dessert/:id" element={<OrderDessert />} />
            <Route path="/menu/appetizer-order/:id" element={<AppetizerOrder />} />
            <Route path="/menu/payment-successful" element={<PaymentSuccessful />} />
            <Route
              path="/menu/vegan-dessert-order/:id"
              element={<VeganDessertOrder />}
            />
            <Route
              path="/menu/special-dessert-order/:id"
              element={<SpecialDessertOrder />}
            />
          </Routes>
          <Footer />
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
