import { compose } from "redux";

export const GET_STORE_DATA = "GET_STORE_DATA";
export const GET_DATA = "GET_DATA";

export const API_KAY = `6627805f240aca84b4a726d2429a3208`;

export function getData(data) {
  return function (dispatch) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data.title}&units=metric&appid=${API_KAY}`
    )
      .then(
        (response) => response.json(),
        (error) => console.log("An error occured.", error)
      )
      .then((json) => {
        dispatch({
          type: GET_DATA,
          payload: json,
        });
      });
  };
}

export function getStoreData(data) {
  return function (dispatch) {
    dispatch({
      type: GET_STORE_DATA,
      payload: data,
    });
  };
}
