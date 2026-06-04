import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Cars = () => {

  let navigate = useNavigate()

  let handlebrand=(brand)=>{
    navigate(`/userportal/cars/${brand}`)
  }

  return (
    <div className='usercars'>
      <div className="container">
        <h1>Select the Car Brands</h1>
        <div className="buttonbox">
          <button onClick={() => handlebrand('Tata')}><img src="https://static.vecteezy.com/system/resources/previews/020/975/561/non_2x/tata-logo-tata-icon-transparent-free-png.png" alt="" />TATA</button>            
          <button onClick={()=>handlebrand('BMW')}><img src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19707.png" alt="no image" />BMW</button>
          <button onClick={()=>handlebrand('Ford')}><img src="https://www.freepnglogos.com/uploads/ford-logo-hd-png-1.png" alt="" /> FORD</button>
          <button onClick={() => handlebrand('Honda')}><img src="https://www.freepnglogos.com/uploads/honda-logo-png/honda-logo-png-19.png" alt="" />HONDA</button>
          <button onClick={() => handlebrand('Mahindra')}><img src="https://logowik.com/content/uploads/images/t_mahindra-auto-with-wordmark7167.logowik.com.webp" alt="" />MAHINDRA</button>
          <button onClick={() => handlebrand('Toyota')}><img src="https://www.freepnglogos.com/uploads/toyota-logo-png/logo-toyota-transparent-19.png" alt="" />TOYOTA</button>
        </div>
      </div>
    </div>

  )
}

export default Cars
