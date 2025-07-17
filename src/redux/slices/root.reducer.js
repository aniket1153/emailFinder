import { combineReducers } from "redux";
import authReducer from "./auth.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
