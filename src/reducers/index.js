import { combineReducers } from "redux";

import achievementsReducer from "./achievementsReducer";
import userReducer from "./userReducer";
import gamesReducer from "./gamesReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  games: gamesReducer,
  achievements: achievementsReducer
});
