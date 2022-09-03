import React, {useState, useEffect} from 'react';
import './Home.css'
import { getWeatherData } from '../../WeatherData/weatherapi';
import { ScaleLoader } from 'react-spinners';

function Home() {

    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
  
    const getData = async () => {
      try{
          setLoading(true);
          const data = await getWeatherData(city);
          setWeatherData(data);
          setLoading(false);
      }catch(error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
    useEffect(() => {
      getData();
    }, []);

  

  return(
  <div className="App">
    <div className="card">
       <h2 className="title"><i className="fa fa-cloud"></i>Weather Now</h2>
         <div className="search-form">
             <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name" />
             <button type="button" onClick={() => getData()}>Search</button>
          </div>

          {loading ? (
            <div className="loader-container">
              <ScaleLoader
                css={override}
                size={200}
                color= {"#fff"}
                loading= {loading}
                />
            </div>
          ) : (
            <>
            {weatherdata !== null ? (
        <paper className="paper">
             <h2>{weatherdata.name} || {weatherdata.sys.country}</h2>
           <div className='content'>
           <h3 className='desc'>{weatherdata.weather[0].main}</h3>
              <div className='font'>
                <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
                <img src= {`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt = 'weather icon' id='img'/>
              </div>
                
              <div className='MinMax-temp'>
                <h5>{parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C  
                   <br/>Min</h5>
                <h5>{parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C'
                   <br/>Max</h5>
              </div>

             <div className='Humi-wind'>
              <h5>{weatherdata.main.humidity}%<br/>Humidity</h5>
              <h5>{weatherdata.wind.speed}m/s<br/>Wind</h5>
             </div>
           </div>
        </paper>
        ) : null}
        </>
        ) }
    </div>
  </div>
  
  );
}
    export default Home