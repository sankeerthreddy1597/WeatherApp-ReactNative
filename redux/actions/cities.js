import axios from "axios";
import { APIKey } from "@env";

import {
  ADD_CITY,
  ADD_CITY_BY_LOCATION,
  GET_CITY_FORECAST,
} from "../actionConstants/cityActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addCity = (city) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`,
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
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
  dispatch({
    type: ADD_CITY,
    payload: newCityDetails,
  });
};

export const addCityByLocation = (lat, lon) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`,
    config
  );
  const locationCityData = {
    id: data.id.toString(),
    city: data.name,
    country: data.sys.country,
    temperature: ((data.main.temp - 273) * (9 / 5) + 32).toFixed(1),
    weatherCondition: data.weather[0].main,
    rain: data.main.humidity,
    wind: data.wind.speed,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
  dispatch({
    type: ADD_CITY_BY_LOCATION,
    payload: locationCityData,
  });
};

export const getCityForecast = (city) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${APIKey}`,
    config
  );
  let cityData = [];
  data.list.forEach((hour) =>
    cityData.push({
      id: hour.dt.toString(),
      date_txt: hour.dt_txt,
      maxTemp: ((hour.main.temp_max - 273) * (9 / 5) + 32).toFixed(1),
      minTemp: ((hour.main.temp_min - 273) * (9 / 5) + 32).toFixed(1),
      condition: hour.weather[0].main,
    })
  );
  dispatch({
    type: GET_CITY_FORECAST,
    payload: cityData,
  });
};
