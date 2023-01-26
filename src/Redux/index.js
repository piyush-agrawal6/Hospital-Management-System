import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import dataReducer from "./Datas/reducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});
