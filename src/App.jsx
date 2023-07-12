import React from 'react';
import Blog from './pages/Blog';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ReactDOM from 'react-dom/client'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />

    </>
  )
}

export default App





