import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function babyMonitoring() {
  const [temp, setTemp] = useState('n/a');
  const [flag, setFlag] = useState('');

  const fetchData = async () =>{
    try{
      const response = await axios.get('http://192.168.4.1/babymonitor');
      setTemperature(response.temperature);
      setFlag(response.flag);
    }catch(error){
      console.error('Error fetcing data:', error);
    }
  };

  return (
    <>
    <div className='appContainer'>
      <div >
        <h1>Baby Monitoring System</h1>
      </div>
      <div className='temperatureContainer'>
        <p className='temperatureLable'>TEMPERATURE</p>
        <p className='temperatureValue'>{temp}&deg;</p>
      </div>
      {flag === 'crying' && (
        <div className='alert'>Baby is crying!</div>
      )}
    </div>
      
    </>
  )
}

export default babyMonitoring
