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

export const getGame = () => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}/game`)
    .once("value")
    .then(game => {
      console.log(game);
      dispatch({ type: "GET_GAME", game });
    });
};

export const saveGame = currentGame => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}/game`)
    .set(currentGame)
    .then(game => {
      dispatch({ type: "GET_GAME", game });
    });
};

export const clearGame = () => (dispatch, getState) => {
  const authUser = getState().auth.authUser;

  database
    .ref(`users/${authUser}/game`)
    .remove()
    .then(() => {
      dispatch({ type: "CLEAR_GAME" });
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
