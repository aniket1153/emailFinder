import { combineReducers } from "redux";
import authReducer from "./auth.slice";
import plansreducer from "./plans.slice";
import emailAccountsreducer from "./emailaccount.slice";
import dashBoardReducer from "./dashboard.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  plans: plansreducer,
  emailAccounts: emailAccountsreducer,
  dashboard: dashBoardReducer,
});

export default rootReducer;
