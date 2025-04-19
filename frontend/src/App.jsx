import { useState } from 'react'
// import './App.css'
import Home from './Home/Home'
import Navbar from './navbar/Navbar'

import Cart from './cart/Cart'
import Footer from './footer/Footer'
import SubNavbar from './navbar/SubNavbar'
import { Route,Routes } from 'react-router-dom'
import Offer from './Home/offer/Offer'
import SearchBar from './navbar/SearchBar'
import Help from './help/Help'
import Login from './login/Login'
import Signup from './login/Signup'
import MainComponent from './Main1/MainComponent'
Help
function App() {
  return (
    <>
    <Navbar/>
    <SubNavbar/>
    
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/offer' element={<Offer/>}/>
    <Route path='/help' element={<Help/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/maincomponent' element={<MainComponent/>} />
   </Routes>
   <Footer/>
    </>
  )
}

export default App