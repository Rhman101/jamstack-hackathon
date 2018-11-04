import * as firebase from "firebase";

const prodConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

const devConfig = {
  apiKey: "AIzaSyCKrO_-0CsPmkPw_m1W-kiiKCL1surpOrk",
  authDomain: "mathosaurus-dev.firebaseapp.com",
  databaseURL: "https://mathosaurus-dev.firebaseio.com",
  projectId: "mathosaurus-dev",
  storageBucket: "mathosaurus-dev.appspot.com",
  messagingSenderId: "916685290119"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  database as default
};
