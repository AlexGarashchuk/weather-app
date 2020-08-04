import React from 'react';
import Form from '../Form';
import CityList from '../CityList';
import { CurrentPlace } from '../CurrentPlace';
import WeatherData from '../WeatherData';
import { Link } from 'react-router-dom';

export function Basic(){
  return(
    <div>
    <Form />
    <CityList />
    <CurrentPlace />
    <WeatherData />
    <div className="bottom">
      <Link to="/details">Details</Link>
    </div>
  </div>
  )
}