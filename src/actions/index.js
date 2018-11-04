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

export const saveCurrentGame = (id, currentGame) => async dispatch => {
  // save to database

  dispatch({ type: "GET_CURRENT_GAME", currentGame });
};

export const getCurrentGame = id => async dispatch => {
  // const currentGame = query from database
  const currentGame = {};

  dispatch({ type: "GET_CURRENT_GAME", currentGame });
};

export const updateCurrentGame = (id, updates) => async dispatch => {
  // update in database

  dispatch({ type: "UPDATE_CURRENT_GAME", updates });
};

export const deleteCurrentGame = id => async dispatch => {
  // delete from database

  dispatch({ type: "CLEAR_CURRENT_GAME" });
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
