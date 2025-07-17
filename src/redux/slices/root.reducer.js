import { combineReducers } from "redux";
import authReducer from "./auth.slice";
import plansreducer from "./plans.slice";
import emailAccountsreducer from "./emailaccount.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  plans: plansreducer,
  emailAccounts: emailAccountsreducer,
  // Add other reducers here
});

export default rootReducer;
