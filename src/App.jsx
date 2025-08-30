import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Blog from './pages/Blog';
import MainLayout from './pages/MainLayout';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Home/> }></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/packages" element={<Packages/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
