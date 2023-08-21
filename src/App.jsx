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
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/payment-method" element={<PaymentMethod />} />
            <Route path="/order-dessert/:id" element={<OrderDessert />} />
            <Route path="/appetizer-order/:id" element={<AppetizerOrder />} />
            <Route path="/payment-successful" element={<PaymentSuccessful />} />
            <Route
              path="/vegan-dessert-order/:id"
              element={<VeganDessertOrder />}
            />
            <Route
              path="/special-dessert-order/:id"
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
