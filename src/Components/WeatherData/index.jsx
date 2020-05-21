import React from "react";
import { getData, getStoreData } from "../../Actions/index";
import { connect } from "react-redux";

import styles from "./Styles.module.css";

function WeatherDataView(props) {
  const weather = `${Math.round(props.weather)}`;

  return (
    <div className={styles.list}>
      <div className={styles.item}>{weather == 0 ? "" : `${weather}ºC`} </div>
      <div className={styles.item}> {props.name}</div>
      <div className={styles.item}> {props.country}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.lastData.weather ? state.lastData.weather : "",
    name: state.lastData.name ? state.lastData.name : "",
    country: state.lastData.country ? state.lastData.country : "",
  };
};

const WeatherData = connect(mapStateToProps, { getData, getStoreData })(
  WeatherDataView
);

export default WeatherData;
