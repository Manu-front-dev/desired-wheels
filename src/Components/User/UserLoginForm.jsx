import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const UserLoginForm = () => {

    let [formdata, setformdata] = useState({ email: "", password: "", name: "" })
    let [err, seterr] = useState('')


    let navigate = useNavigate()
    let handleinput = (e) => {
        let key = e.target.name
        let val = e.target.value
        setformdata({
            ...formdata,
            [key]: val
        });
    }

    let handlesubmit = (e) => {
        e.preventDefault()

        let { email, password, name } = formdata

        let credentials = {
            usermail: "user@gmail.com",
            userpswd: "user@1234",
            username: "mark"
        }

        let { usermail, userpswd, username } = credentials
        if (email === usermail) {
            if (password === userpswd) {
                seterr('')
                toast.success(`login successful`)
                navigate(`userportal`)
            } else {
                seterr(<h4>password is incorrect</h4>)
                toast.error(`invalid password`)
            }
        } else {
            seterr(<h4>email is incorrect</h4>)
            toast.error(`invalid Email Address`)
        }
    }

    return (
        <div className='users'>
            <form onSubmit={handlesubmit}>
                <h2>User Login</h2>
                <input
                    required
                    type="email"
                    name='email'
                    placeholder='Enter Your Email Address'
                    onChange={handleinput}
                    value={formdata.email}
                />
                <input
                    required
                    type="password"
                    name='password'
                    placeholder='Enter Your Login Password'
                    onChange={handleinput}
                    value={formdata.password}
                />
                <input 
                    required
                    type="text"
                    name='name'
                    placeholder='Enter Your Name'
                    onChange={handleinput}
                    value={formdata.name}
                />
                <button>
                    Login
                </button>
            </form>
            <h4>{err}</h4>
        </div>
    )
}

export default UserLoginForm
