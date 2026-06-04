import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserLoginForm = () => {

    let [formdata, setformdata] = useState({ email: "", password: "", name: "" })
    let [err, seterr] = useState('')

    let navigate = useNavigate()

    let handleinput = (e) => {
        let { name, value } = e.target

        setformdata({
            ...formdata,
            [name]: value
        })
    }

    let handlesubmit = (e) => {
        e.preventDefault()

        let { email, password, name } = formdata

        // check empty fields
        if (
            email.trim() === "" ||
            password.trim() === "" ||
            name.trim() === ""
        ) {
            seterr(<h4 style={errdesign}>All fields are required</h4>)
            toast.error("Please fill all fields")
            return
        }

        // success case (no hard validation)
        seterr('')
        toast.success("Login successful")
        navigate("userportal")
    }

    let errdesign = {
        color: 'red',
        textAlign: 'right'
    }

    return (
        <div className='users'>
            <form onSubmit={handlesubmit}>
                <h2>User Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    onChange={handleinput}
                    value={formdata.email}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Login Password"
                    onChange={handleinput}
                    value={formdata.password}
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={handleinput}
                    value={formdata.name}
                />

                <button>Login</button>
            </form>

            <h4>{err}</h4>
        </div>
    )
}

export default UserLoginForm