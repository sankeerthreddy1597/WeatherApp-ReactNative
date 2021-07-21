import { combineReducers } from "redux";

import { cityReducer } from "./cityReducer";

export const rootReducer = combineReducers({
  cityReducer,
});
