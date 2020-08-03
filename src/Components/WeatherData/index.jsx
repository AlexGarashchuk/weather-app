import React from "react";
import { getData, getStoreData } from "../../Actions/index";
import { connect } from "react-redux";
import cx from "classnames";
import styles from "./Styles.module.css";

function WeatherDataView(props) {
  const { name, country, weather, visible } = props;
  const weatherMath = `${Math.round(weather)}`;

  return (
    <div className={styles.list}>
      {visible ? (
        <div className={styles.list}>
          <div className={cx(styles.item, styles.temp)}>
            {weather == 0 ? "" : `${weatherMath}ºC`}{" "}
          </div>
          <div className={styles.item}>
            {name}, {country}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.lastData.weather ? state.lastData.weather : "",
    name: state.lastData.name ? state.lastData.name : "",
    country: state.lastData.country ? state.lastData.country : "",
    visible: state.lastData.visible,
  };
};

const WeatherData = connect(mapStateToProps, { getData, getStoreData })(
  WeatherDataView
);

export default WeatherData;
