import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const config = {
  apiKey: "AIzaSyDkOcc47Ipeoe4XUSW6XEq1iP4oHArJqoY",
  authDomain: "tapthattags.com",
  projectId: "tagit-alpha",
  storageBucket: "https://tagit-alpha.appspot.com",
  messagingSenderId: "556537423060",
  appId: "1:556537423060:web:bbe4d1d0b8b6a671aa8741",
  measurementId: "G-NSTHGC1FYK",
};

const app = firebase.initializeApp(config);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LfLy3kjAAAAANfR7zFJfvnWq7ZqNjH2_esJDcrG"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
export const db = app.firestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
