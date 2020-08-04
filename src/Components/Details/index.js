import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Details() {
  
  const value = useSelector((state) => state.lastData);
  let { name, wind, sunrise, sunset,  visible} = value;
  const [weather, setWeather] = useState([]);

  let sunriseUnix = new Date(sunrise * 1000);
  console.log(sunriseUnix);
  console.log(name);
  return (
    <div>
      {visible ? (
        <div>
          <div> Details about today</div>
          <p>City: {name}</p>
          <p>Wind: {wind} km/h</p>
          {/* <p>sunrise: {sunriseUnix}</p> */}
          <p>sunset: {sunset}</p>
        </div>
      ) : (
        ""
      )}

      <Link to="/">Back to home</Link>
    </div>
  );
}
