import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    let navigate = useNavigate()
    let [cars , setcars ] = useState([])
    let fetchapi= async ()=>{
        let respdata = await axios.get(`/jsondata/wheels.json`)
        setcars(respdata.data.cars);
    }
    useEffect(()=>{
        fetchapi()
    },[])
  return (
    <div className="totalmain">
        
    <div className="add">
        <button onClick={()=>navigate(`addcars`)}>ADD Cars</button>
    </div>
    <div className="addmain">
        <h1 style={{width:'100%',textAlign:'center',margin:'5vh 0',color:'whitesmoke',textShadow:'1px 6px 10px whitesmoke',fontSize:'50px'}}>All Cars</h1>
        {
            cars.map((elem)=>{
                let {id,brand,model,segment,price,safety_rating}=elem
                return(
                   <div className='mainmaps' key={id}>
                <h2 className='brand' >Brand : {brand}</h2>
                <h2 className='model' >Model : {model}</h2>
                <p className='price'>Price : {price}</p>
                <p className='segment'>Segment : {segment}</p>
                <h4 className='saftey'>Saftey_Rating : {safety_rating}</h4>
              </div>
                )
            })
        }
    </div>
    
    </div>
  )
}

export default Add
