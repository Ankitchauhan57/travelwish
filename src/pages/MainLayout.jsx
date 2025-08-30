//MainLayout.jsx
import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <>
    {/* <h2>this is layout</h2> */}
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
