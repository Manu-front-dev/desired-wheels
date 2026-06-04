import React, { useState } from 'react'
import AdminLoginForm from './Admin/AdminLoginForm'
import UserLoginForm from './User/UserLoginForm'

const LandingPage = () => {
  let [bool , setbool] =useState(true)

  let handlebool =()=>{
    setbool(!bool)
  }
  return (
    <div className="main">
      <div className="formcont">
        <h1>Desired Wheels</h1>
        <div className="buttn">
          <button onClick={handlebool} className={bool ? 'left' : 'right'}>{bool ? 'Admin' : 'User'}</button>
        </div>
        <div className="adminform">
          {bool ? <AdminLoginForm/> : <UserLoginForm/>}
        </div>
      </div>
    </div>
  )
}

export default LandingPage