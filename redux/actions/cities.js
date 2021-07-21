import axios from "axios";

import { ADD_CITY, GET_CITY_FORECAST } from "../actionConstants/cityActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addCity = (city) => async (dispatch, getState) => {
  dispatch({
    type: ADD_CITY,
  });
};

export const getCityForecast = (city) => async (dispatch, getState) => {
  dispatch({
    type: GET_CITY_FORECAST,
  });
};
