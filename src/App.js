import React from "react";
import WeatherData from "./Components/WeatherData";
import Form from "./Components/Form";
import CityList from "./Components/CityList";
import './index.css'
import { CurrentPlace } from "./Components/CurrentPlace";

function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <h2>Sinoptik</h2>
        <Form />
        <CityList/>
        <CurrentPlace />
        <WeatherData />
          {/* <Route path="/" exact  component={}></Route>
          <Route path="/Berlin" component={DetailsPage} /> */}
      
      </div>
    </div>
  );
}

 
export default App;
