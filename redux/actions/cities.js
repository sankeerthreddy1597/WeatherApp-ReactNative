import axios from "axios";

import { ADD_CITY, GET_CITY_FORECAST } from "../actionConstants/cityActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addCity = (city) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8e54d9e4ab83608dbc0ea082478cfb5`,
    config
  );
  const newCityDetails = {
    id: data.id.toString(),
    city: data.name,
    country: "USA",
    temperature: ((data.main.temp - 273) * (9 / 5) + 32).toFixed(1),
    weatherCondition: data.weather[0].main,
    rain: data.main.humidity,
    wind: data.wind.speed,
  };
  dispatch({
    type: ADD_CITY,
    payload: newCityDetails,
  });
};

export const getCityForecast = (city) => async (dispatch, getState) => {
  dispatch({
    type: GET_CITY_FORECAST,
  });
};
