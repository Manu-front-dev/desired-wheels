import React from 'react'
import './App.css'
import './assets/style/wheels.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Userportal from './Components/User/Userportal'
import Navbar from './Components/Navbar'
import AdminPortal from './Components/Admin/AdminPortal'

const App = () => {
  return (
    <div className="mainwheel">
      <Routes>
        <Route  element={<LandingPage />} path="/"/>
        <Route  element={<Userportal />} path="/userportal/*"/>
        <Route element={<AdminPortal/>} path='/adminportal/*'/>
      </Routes>
    </div>
  )
}

export default App