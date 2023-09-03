import { combineReducers } from "redux"; // TO combine all the available reducers

import AuthReducers from "./AuthReducers";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: AuthReducers,
  form: formReducer,
});
