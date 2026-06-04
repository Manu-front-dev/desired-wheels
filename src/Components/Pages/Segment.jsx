import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Segment = () => {

  let { brand, segments } = useParams()

  let [cars, setcars] = useState([])

  let fetchapi = async () => {
    let respdata = await axios.get('/jsondata/wheels.json')
    setcars(respdata.data.cars)
  }
  useEffect(() => {
    fetchapi()
  }, [])

  let filtereddata = cars.filter(
    (car) =>
      car.brand?.toLowerCase() === brand?.toLowerCase() &&
      car.segment?.toLowerCase().includes(segments?.toLowerCase())
  )

  return (
    <div className='carsegment'>
      <h1>{brand} {segments} cars</h1>
      {
        filtereddata.length > 0 ?

          filtereddata.map((car) => {
            return (
              <div className='segtable' key={car.id}>
                <h2 className='brand'>Brand : {car.brand}</h2>
                <h2 className='model'>Model : {car.model}</h2>
                <h2 className='price'>Price : {car.price}</h2>
                <h2 className='segment'>Segment : {car.segment}</h2>
                <h2 className='safty'>Safety_Rating : {car.safety_rating}</h2>
              </div>
            )
          })

          :
          <h2 className='nocars'>
            {brand} doesn't have any cars in  {segments} segment
          </h2>
      }
    </div>
  )
}

export default Segment