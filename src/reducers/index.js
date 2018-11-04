import { combineReducers } from "redux";

import achievementsReducer from "./achievementsReducer";
import userReducer from "./userReducer";
import gameReducer from "./gameReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  game: gameReducer,
  achievements: achievementsReducer
});
