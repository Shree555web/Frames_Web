import React from 'react'
import HomePg from './FrameWeb/Pages/HomePg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPg from './FrameWeb/Pages/LoginPg'
import AboutPg from './FrameWeb/Pages/AboutPg'
import ContactPg from './FrameWeb/Pages/ContactPg'
import OrdersPg from './FrameWeb/Pages/OrdersPg'
import ProductsPg from './FrameWeb/Pages/ProductsPg'
import ProductPg from './FrameWeb/Pages/ProductPg'
import Adminpg from './FrameWeb/Pages/Adminpg'
import ServicePg from './FrameWeb/Pages/ServicePg'
import PolicyPg from './FrameWeb/Pages/PolicyPg'
import RegisterPg from './FrameWeb/Pages/RegisterPg'
import CheckoutPg from './FrameWeb/Pages/CheckoutPg'
import CartPg from './FrameWeb/Pages/CartPg'
import ProfilePg from './FrameWeb/Pages/ProfilePg'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPg/>}/>
      <Route path='/Account' element={<ProfilePg/>}/>
      <Route path='/cart' element={<CartPg/>}/>
      <Route path='/che' element={<CheckoutPg/>}/>
      <Route path='/reg' element={<RegisterPg/>}/>
      <Route path='/service' element={<ServicePg/>}/>
      <Route path='/policy' element={<PolicyPg/>}/>
      <Route path='/products/:id' element={<ProductsPg/>}/>
      <Route path='/product/:id' element={<ProductPg/>}/>
      <Route path='/admin' element={<Adminpg/>}/>
      <Route path='/home' element={<HomePg/>}/>
      <Route path='/about' element={<AboutPg/>}/>
      <Route path='/contact' element={<ContactPg/>}/>
      <Route path='/orders' element={<OrdersPg/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
