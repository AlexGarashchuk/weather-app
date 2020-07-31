import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Styles.module.css";

export function CurrentPlace() {
  let [position, setPosition] = useState({});
  let [error, setError] = useState(null);
  let [data, setData] = useState({});
  const API_KAY = `6627805f240aca84b4a726d2429a3208`;

  function success(pos) {
    setPosition(pos.coords);
  }

  function err(e) {
    setError(e);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, err);
    if (position.latitude) {
      const fetchData = async () => {
        const result = await axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&units=metric&appid=${API_KAY}`
        );
        setData(result.data);
      };
      fetchData();
    }
  }, position.latitude);
  return (
    <div>
      {data.name ? (
        <div>
          <p>Current city: {data.name}</p>
          <p className={styles.temp}>
            {Math.round(data.main.temp)}
            ºC
          </p>
        </div>
      ) : (
        "We something weight"
      )}
    </div>
  );
}
