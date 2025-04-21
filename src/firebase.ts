import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHVimg-_WTNtzbJ3pmAB7w-ZCBrAeUwjQ",
  authDomain: "trabahope-19144.firebaseapp.com",
  projectId: "trabahope-19144",
  storageBucket: "trabahope-19144.firebasestorage.app",
  messagingSenderId: "370944255383",
  appId: "1:370944255383:web:41532cc32fe29f7670d0d2",
  measurementId: "G-05LRTEQNP5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
