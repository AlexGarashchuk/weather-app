import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles.css";
import { getStoreData } from "../../Actions";

class CityListView extends Component {
  constructor(props) {
    super(props);
    this.getDataFromStore = this.getDataFromStore.bind(this);
  }

  getDataFromStore(title) {
    this.props.getStoreData({ title });
  }

  render() {
    return (
      <div>
        <div className={styles.list}>
          {this.props.weatherDataName.map((item) => (
            <p
              key={item}
              className={styles.item}
              onClick={() => this.getDataFromStore(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getStoreData: (data) => dispatch(getStoreData(data)),
  };
}
const mapStateToProps = (state) => {
  return {
    weatherDataName: state.weatherData.name ? state.weatherData.name : "",
  };
};

const CityList = connect(mapStateToProps, mapDispatchToProps)(CityListView);
export default CityList;
