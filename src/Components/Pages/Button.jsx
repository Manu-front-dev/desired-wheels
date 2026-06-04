import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Button = () => {
  let { brand } = useParams()
  let [cars, setcars] = useState([])
  let navigate = useNavigate()

  let fetchapi = async () => {
    let respdata = await axios.get('/jsondata/wheels.json')
    setcars(respdata.data.cars)
  }
  useEffect(() => {
    fetchapi()
  }, [])

  let filtereddata = cars.filter(
    (car) => car.brand?.trim().toLowerCase() === brand?.trim().toLowerCase()
  )
  return (
    <>
        <button className='btnback' onClick={()=>navigate('/userportal/cars')}>back to page</button>
      <div className='maincarcont'>
       <div className="buttons">
         <button onClick={()=>navigate(`/userportal/cars/${brand}/suv`)}>SUV</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/sedan`)}>sedan</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/electric`)}>Electric</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/coupe`)}>Coupe</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/sports`)}>Sports</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/Hybrid`)}>Hybrid</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/MPV`)}>MPV</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/pickup`)}>Pickup's</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/Hatchback`)}>HatchBack</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/Electric`)}>Electric</button>
        <button onClick={()=>navigate(`/userportal/cars/${brand}/Convertible`)}>Convertible</button>
       </div> 
        <h1>{brand} cars</h1>

        return (
            <div className="carcard">

              <div className='mainmap' key={cars.id}>
                {/* <div><img src={car.image} alt='no image'/></div> */}
                <h2 className='brand' >Brand : {cars.brand}</h2>
                <h2 className='model' >Model : {cars.model}</h2>
                <p className='price'>Price : {cars.price}</p>
                <p className='segment'>Segment : {cars.segment}</p>
                {/* <img src={cars.image} alt="" /> */}
                <h4 className='saftey'>Saftey_Rating : {cars.safety_rating}</h4>
              </div>
            </div>
          )
        )
      </div>
    </>
  )
}

export default Button
