import database, { firebase, googleAuthProvider } from "../services/firebase";

export const getUser = () => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}`)
    .once("value")
    .then(user => {
      dispatch({ type: "GET_USER", user });
    });
};

export const updateUser = updates => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}`)
    .update(updates)
    .then(user => {
      dispatch({ type: "GET_USER", user });
    });
};

export const deleteUser = () => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}`)
    .remove()
    .then(() => {
      dispatch({ type: "CLEAR_USER" });
    });
};

export const getGames = () => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}/games`)
    .once("value")
    .then(games => {
      dispatch({ type: "GET_GAMES", games });
    });
};

export const saveGame = (currentGame, area) => (dispatch, getState) => {
  const authUser = getState().auth.authUser;
  const {
    area,
    level = 1,
    charHealth = 100,
    monsterHealth = 100,
    questionNumber = 1
  } = currentGame;
  const gameToSave = { level, charHealth, monsterHealth, questionNumber };

  database
    .ref(`users/${authUser}/games/${area}`)
    .set(gameToSave)
    .then(savedGame => {
      const game = { id: savedGame.id, ...savedGame };

      dispatch({ type: "SAVE_GAME", game, area });
    });
};

export const clearGame = area => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}/games/${area}`)
    .remove()
    .then(() => {
      dispatch({ type: "CLEAR_GAME", area });
    });
};

export const startCreateUserWithEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const createUserWithEmail = (id, username, email) =>
  database.ref(`users/${id}`).set({
    username,
    email
  });

export const loginWithGoogleAuth = () =>
  firebase.auth().signInWithPopup(googleAuthProvider);

export const loginWithEmail = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const logout = () => dispatch => {
  firebase.auth().signOut.then(() => {
    dispatch({ type: "SET_AUTH", authUser: null });
  });
};

export const setAuthUser = authUser => dispatch => {
  dispatch({ type: "SET_AUTH", authUser });
};

export const startResetPassword = email =>
  firebase.auth().sendPasswordResetEmail(email);
