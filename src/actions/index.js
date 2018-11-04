import database, {
  firebase,
  googleAuthProvider,
  facebookAuthProvider
} from "../services/firebase";

export const getUser = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;

  const user = await database.ref(`users/${uid}`).once("value");

  dispatch({ type: "GET_USER", user });
};

export const updateUser = updates => async (dispatch, getState) => {
  const uid = getState().auth.uid;

  const user = await database.ref(`users/${uid}`).update(updates);

  dispatch({ type: "GET_USER", user });
};

export const deleteUser = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;

  await database.ref(`users/${uid}`).remove();

  dispatch({ type: "CLEAR_USER" });
};

export const getGames = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;

  const games = await database.ref(`users/${uid}/games`).once("value");

  dispatch({ type: "GET_GAMES", games });
};

export const saveGame = (currentGame, area) => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  const {
    area,
    level = 1,
    charHealth = 100,
    monsterHealth = 100,
    questionNumber = 1
  } = currentGame;
  const gameToSave = { level, charHealth, monsterHealth, questionNumber };

  const savedGame = await database
    .ref(`users/${uid}/games/${area}`)
    .set(gameToSave);

  const game = { id: savedGame.id, ...savedGame };

  dispatch({ type: "SAVE_GAME", game, area });
};

export const clearGame = area => async (dispatch, getState) => {
  const uid = getState().auth.uid;

  await database.ref(`users/${uid}/games/${area}`).remove();

  dispatch({ type: "CLEAR_GAME", area });
};

export const startCreateUserWithEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const createUserWithEmail = (id, username, email) =>
  database.ref(`users/${id}`).set({
    username,
    email
  });

export const loginWithAuthProvider = authProvider => {
  return () => {
    if (authProvider === "google") {
      return firebase.auth().signInWithPopup(googleAuthProvider);
    } else if (authProvider === "facebook") {
      return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
  };
};

export const loginWithEmail = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const login = uid => async dispatch => {
  dispatch({ type: "LOG_IN", uid });
};

export const logout = () => async dispatch => {
  firebase.auth().signOut();

  dispatch({ type: "LOG_OUT" });
};

export const startResetPassword = email =>
  firebase.auth().sendPasswordResetEmail(email);
