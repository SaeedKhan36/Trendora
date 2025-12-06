import React from 'react'
import { Router, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/home'
import Collection from './pages/collection'
import Contact from './pages/contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'


const App = () => {
  return (
    <div className=''>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={< Cart />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product:productId' element={<Product />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/login' element={</>}


    </Router>

    </div >
  )
}

export default App


