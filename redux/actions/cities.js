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
  console.log(data);
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

export const getCityForecast = (city) => async (dispatch, getState) => {
  console.log(city);
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=d8e54d9e4ab83608dbc0ea082478cfb5`,
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
  //console.log(cityData);
  dispatch({
    type: GET_CITY_FORECAST,
    payload: cityData,
  });
};
