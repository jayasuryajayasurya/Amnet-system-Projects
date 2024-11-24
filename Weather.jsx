import axios from 'axios';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Weather = () => {
  const Url = 'c3aeddacff29ebf82e72021835c84c1e';
  const [icon, seticon] = useState({})
  const WeatherApp = async (e) => {
    e.preventDefault()
    const input = e.target.Text.value
    const Userinputs = input == ''? alert('Enter the Location First'):input.charAt(0).toUpperCase() + input.slice(1);

    const FetchData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${Url}`)
    const ansers = FetchData.data.weather[0];
    const latlon = FetchData.data.coord
    const countrys = FetchData.data.sys.country
    const deg = FetchData.data.wind.deg
    seticon({
      location: Userinputs,
      WindStatus: ansers.main.charAt(0).toUpperCase() + ansers.main.slice(1),
      icon: `http://openweathermap.org/img/wn/${ansers.icon}@2x.png`,
      lat: latlon.lat,
      lon: latlon.lon,
      country: countrys,
      deg: deg
    })
  }

  return (
    <div className='row' style={{ height: '100vh', width: '100vw' }}>
      <div className='col container-fluid d-flex align-items-center justify-content-center bg-dark overflow-hidden text-center'>
        <form action="" onSubmit={WeatherApp} className=' rounded-3 p-4' style={{ width: '450px', height: 'fit-content', backgroundColor: 'whitesmoke' }}>
          <h1 className='mt-2'>WeatherApp</h1>
          <input type="text" style={{ width: '230px' }} className='mt-4 p-1rounded p-1 rounded-1' name='Text' placeholder='Check Weather Conditions!' /><br />
          <button type='submit' className=' btn btn-outline-warning border-black text-black mt-4 rounded'>Check Condition <i class="bi bi-search"></i></button>
          {icon && <img src={icon.icon} className='d-block mx-auto mt-4 rounded' alt="" style={{ backgroundColor: 'skyblue' }} />}
          {icon.location && <h5 className='m-3 ms-0 fw-bolder fs-1'><i class="bi bi-geo-alt-fill"></i> {icon.location}</h5>}
          <div className="row mt-4 mb-4">
            <div className="col ">
              {icon.deg && <h5 className='fw-bolder fs-1 '>{icon.deg}<sup>o</sup> C</h5>}
            </div>
            <div className="col">
              {icon.country && <h5><i class="bi bi-flag-fill fw-bolder fs-2"></i> - {icon.country}</h5>}
            </div>
            <div className="col">
              {icon.WindStatus && <h5 className='fw-bolder fs-3'><i class="bi bi-cloud "></i> {icon.WindStatus}</h5>}
            </div></div>
          <div className="row">
            <div className="col">
              {icon.lat && <h5>LAT : {icon.lat}</h5>}
            </div>
            <div className="col">
              {icon.lon && <h5>LON : {icon.lon}</h5>}
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Weather