import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, getStoreData } from "../../Actions";
import styles from "./styles.css";

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    if (!this.props.cityName.includes(title)) {
      this.props.getData({ title });
    } else {
      this.props.getStoreData({ title });
    }

    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.container}>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
            className={styles.input}
          />
          <button type="submit">SAVE</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    cityName: state.weatherData.name,
    cityWeather: state.weatherData.weather,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: (data) => dispatch(getData(data)),
    getStoreData: (data) => dispatch(getStoreData(data)),
  };
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;
