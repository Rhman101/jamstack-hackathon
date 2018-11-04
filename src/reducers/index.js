import { combineReducers } from "redux";

import achievementsReducer from "./achievementsReducer";
import userReducer from "./userReducer";
import currentGameReducer from "./currentGameReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  currentGame: currentGameReducer,
  achievements: achievementsReducer
});
