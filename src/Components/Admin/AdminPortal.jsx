import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Add from '../Pages/Add'
import AddCars from '../Pages/AddCars'

const AdminPortal = () => {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Add/>} path='/add'/>
      <Route element={<AddCars/>} path='/add/addcars'/>
    </Routes>
    </>
  )
}

export default AdminPortal
