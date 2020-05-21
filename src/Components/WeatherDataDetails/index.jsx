import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "../../Actions/index";

const DetailsPage = (props) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `;
  };

  return (
    <div>
      <Link to="/">Go to back</Link>
      {this.props.weather}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.lastData.weather ? state.lastData.weather : "",
    name: state.lastData.name ? state.lastData.name : "",
    country: state.lastData.country ? state.lastData.country : "",
  };
};
const Details = connect(mapStateToProps, { getData })(DetailsPage);

export default Details;
