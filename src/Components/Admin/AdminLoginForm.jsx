import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLoginForm = () => {

    let [formdata, setformdata] = useState({ email: "", password: "" })
    let [err, seterr] = useState('')

    let navigatee = useNavigate()

    let handleinput = (e) => {
        let { name, value } = e.target

        setformdata({
            ...formdata,
            [name]: value
        })
    }

    let handlesubmit = (e) => {
        e.preventDefault()

        let { email, password } = formdata

        // check empty fields
        if (email.trim() === "" || password.trim() === "") {
            seterr(<h4 style={errdesign}>Both fields are required</h4>)
            return
        }

        // if filled, allow navigation
        seterr('')
        navigatee("/adminportal")
    }

    let errdesign = {
        textAlign: 'right',
        color: 'red'
    }

    return (
        <div className='admins'>
            <form onSubmit={handlesubmit}>
                <h2>Admin Login</h2>

                <input
                    type="email"
                    placeholder='Enter Your Email Address'
                    name='email'
                    value={formdata.email}
                    onChange={handleinput}
                />

                <input
                    type="password"
                    placeholder='Enter Your Login Password'
                    name='password'
                    value={formdata.password}
                    onChange={handleinput}
                />

                <button>Login</button>
            </form>

            <h4>{err}</h4>
        </div>
    )
}

export default AdminLoginForm