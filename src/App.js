import React from "react";
import {Switch, Route } from "react-router-dom";
import styles from "./index.css";
import WeatherData from "./Components/WeatherData";
import Form from "./Components/Form";
import CityList from "./Components/CityList";
import DetailsPage from "./Components/WeatherDataDetails";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
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
