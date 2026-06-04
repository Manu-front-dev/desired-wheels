import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Cars from '../Pages/Cars'
import About from '../Pages/About'
import Button from '../Pages/Button'
import Segment from '../Pages/Segment'
const Userportal = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Cars/>} path='/cars'/>
          <Route element={<About/>} path='/about'/>
          <Route element={<Button/>} path='/cars/:brand'/> 
          <Route element={<Segment/>} path='/cars/:brand/:segments'/>
        </Routes>
    </>
  )
}

export default Userportal
