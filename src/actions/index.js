export const addUser = (id, user) => async dispatch => {
  // save to database

  dispatch({ type: "GET_USER", user });
};

export const getUser = id => async dispatch => {
  // const user = query from database
  const user = {};

  dispatch({ type: "GET_USER", user });
};

export const updateUser = (id, updates) => async dispatch => {
  // update in database

  dispatch({ type: "UPDATE_USER", updates });
};

export const deleteUser = id => async dispatch => {
  // delete from database

  dispatch({ type: "CLEAR_USER" });
};

export const getGames = userId => async dispatch => {
  // query db for games by userId

  dispatch({ type: "GET_GAMES" });
};

export const saveGame = (userId, currentGame) => async dispatch => {
  // save to database
  const { area, ...game } = currentGame;

  dispatch({ type: "SAVE_GAME", currentGame });
};

export const clearGame = (userId, area) => async dispatch => {
  // delete from database

  dispatch({ type: "CLEAR_GAME", area });
};

export const login = () => async dispatch => {
  // log in with firebase
  const id = "";

  dispatch({ type: "LOG_IN", id });
};

export const logout = () => async dispatch => {
  // log out with firebase

  dispatch({ type: "LOG_OUT" });
};
