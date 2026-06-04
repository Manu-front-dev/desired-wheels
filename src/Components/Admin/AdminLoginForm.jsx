import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLoginForm = () => {

    let [formdata, setformdata] = useState({ email: "", password: "" })
    let [err, seterr] = useState('')


    let navigatee = useNavigate()

    let handleinput = (e) => {
        let key = e.target.name
        let val = e.target.value
        // console.log(key, val);

        setformdata({
            ...formdata,
            [key]: val
        })
    }

    let handlesubmit = (e) => {
        e.preventDefault()

        let { email, password } = formdata

        let credentials = {
            admin_mail: "admn@gmail.com",
            admin_pswd: "Admin@1234"
        }
        let { admin_mail, admin_pswd } = credentials
        if (email === admin_mail) {
            if (password === admin_pswd) {
                seterr('')
                navigatee("/adminportal")
            } else {
                seterr(<h4 style={errdesign}> Password is invalid</h4>)
            }
        } else {
            seterr(<h4 style={errdesign}> Email is invalid</h4>)
        }
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
                <button>
                    Login
                </button>
            </form>

            <h4>{err}</h4>
        </div>
    )
}

export default AdminLoginForm
