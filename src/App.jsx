import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/home'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />


      </Routes>

    </div >
  )
}

export default App


