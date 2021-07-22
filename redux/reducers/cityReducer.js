import {
  ADD_CITY,
  ADD_CITY_BY_LOCATION,
  GET_CITY_FORECAST,
} from "../actionConstants/cityActions";

export const cityReducer = (
  state = { citiesList: [], cityForecast: [] },
  action
) => {
  switch (action.type) {
    case ADD_CITY:
      let cityFlag = false;
      state.citiesList.forEach((city) =>
        city.id === action.payload.id ? (flag = true) : (flag = false)
      );
      if (flag) {
        return state;
      } else {
        return {
          ...state,
          citiesList: [...state.citiesList, action.payload],
        };
      }
    case ADD_CITY_BY_LOCATION:
      let flag = false;
      state.citiesList.forEach((city) =>
        city.id === action.payload.id ? (flag = true) : (flag = false)
      );
      if (flag) {
        return state;
      } else {
        return {
          ...state,
          citiesList: [action.payload, ...state.citiesList],
        };
      }

    case GET_CITY_FORECAST:
      return {
        ...state,
        cityForecast: action.payload,
      };
    default:
      return state;
  }
};
