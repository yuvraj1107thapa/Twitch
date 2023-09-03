import { combineReducers } from "redux"; // TO combine all the available reducers
import AuthReducers from "./AuthReducers";
export default combineReducers({
  //   replaceMe: () => 5,
  auth: AuthReducers,
});
