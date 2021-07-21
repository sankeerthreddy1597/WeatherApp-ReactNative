import { ADD_CITY, GET_CITY_FORECAST } from "../actionConstants/cityActions";

export const cityReducer = (
  state = { citiesList: [], cityForecast: [] },
  action
) => {
  switch (action.type) {
    case ADD_CITY:
      return state;
    case GET_CITY_FORECAST:
      return state;
    default:
      return state;
  }
};
