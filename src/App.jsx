import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/home'
import Collection from './pages/collection'
import Contact from './pages/contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/login'
import About from './pages/about'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={< Cart />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product:productId' element={<Product />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/about' element={< About />} />


      </Routes>

    </div >
  )
}

export default App


