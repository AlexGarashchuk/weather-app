import React from "react";
import {Switch, Route } from "react-router-dom";
import WeatherData from "./Components/WeatherData";
import Form from "./Components/Form";
import CityList from "./Components/CityList";
import DetailsPage from "./Components/WeatherDataDetails";
import './index.css'

function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <h2>Sinoptik</h2>
        <Form />
        <CityList/>
        <Switch>
          <Route path="/" exact  component={WeatherData}></Route>
          <Route path="/Berlin" component={DetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

 
export default App;
