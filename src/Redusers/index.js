import { GET_DATA, GET_STORE_DATA } from "../Actions";

const initialState = {
  data: {
    lastData: {
      id: [],
      name: [],
      country: [],
      weather: [],
      sunrise: [],
      sunset: [],
      visibility: [],
      wind: [],
      visible: false,
    },
    weatherData: {
      id: [],
      name: [],
      country: [],
      weather: [],
      sunrise: [],
      sunset: [],
      visibility: [],
      wind: [],
      visible: true,
    },
  },
};

function rootReducer(state = initialState.data, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        lastData: {
          ...state.weatherData,
          name: action.payload.name,
          id: action.payload.id,
          weather: action.payload.main.temp,
          country: action.payload.sys.country,
          sunrise: action.payload.sys.sunrise,
          sunset: action.payload.sys.sunset,
          visibility: action.payload.visibility,
          wind: action.payload.wind.speed,
          visible: true,
        },
        weatherData: {
          ...state.weatherData,
          name: state.weatherData.name.concat(action.payload.name),
          id: state.weatherData.id.concat(action.payload.id),
          weather: state.weatherData.weather.concat(action.payload.main.temp),
          country: state.weatherData.country.concat(action.payload.sys.country),
        },
      };
    case GET_STORE_DATA:
      return {
        ...state,
        lastData: {
          ...state.weatherData,
          name: action.payload.title,
          weather:
            state.weatherData.weather[
              state.weatherData.name.indexOf(action.payload.title)
            ],
          country:
            state.weatherData.country[
              state.weatherData.name.indexOf(action.payload.title)
            ],
        },
      };

    default:
      return state;
  }
}

export default rootReducer;
