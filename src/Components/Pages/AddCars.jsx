import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddCars = () => {

    let [formdata, setformdata] = useState({
        brand: "",
        model: "",
        price: "",
        segment: "",
        safety_rating: ""
    })

    let handleinput = (e) => {

        let key = e.target.name
        let val = e.target.value

        setformdata({
            ...formdata,
            [key]: val
        })
    }

    let handlesubmit = (e) => {

        e.preventDefault()

        axios.post(`/jsondata/wheels.json`, formdata)

        toast.success(`Car Added Successfully`)

        setformdata({
            brand: "",
            model: "",
            price: "",
            segment: "",
            safety_rating: ""
        })
    }

    return (

        <div className="addcont">

            <h1>Add Car's</h1>

            <div className="formbox">

                <form onSubmit={handlesubmit}>

                    <select
                        name='brand'
                        value={formdata.brand}
                        onChange={handleinput}
                    >

                        <option value="">Select Car Brand</option>

                        <option value="BMW">BMW</option>
                        <option value="ford">FORD</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Mahindra">Mahindra</option>
                        <option value="Tata">Tata</option>

                    </select>

                    <input
                        type="text"
                        placeholder='Enter Your Car Model'
                        name='model'
                        value={formdata.model}
                        onChange={handleinput}
                    />

                    <input
                        type="text"
                        placeholder='Enter Your Car Price'
                        name='price'
                        value={formdata.price}
                        onChange={handleinput}
                    />

                    <input
                        type="text"
                        placeholder='Enter Your Car Segment'
                        name='segment'
                        value={formdata.segment}
                        onChange={handleinput}
                    />

                    <input
                        type="text"
                        placeholder="Enter Car's Safety Rating"
                        name='safety_rating'
                        value={formdata.safety_rating}
                        onChange={handleinput}
                    />

                    <button>ADD CARS</button>

                </form>

            </div>

        </div>
    )
}

export default AddCars