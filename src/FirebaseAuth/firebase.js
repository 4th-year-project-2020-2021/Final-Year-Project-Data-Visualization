import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


// Referances
// https://firebase.google.com/docs/auth/web/manage-users
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// https://firebase.google.com/docs/auth/web/google-signin
// https://firebase.google.com/docs/auth/web/password-auth
// https://firebase.google.com/docs/auth/web/facebook-login
// https://firebase.google.com/docs/auth/web/github-auth
// https://firebase.google.com/docs/auth/web/firebaseui
// https://nomadcoders.co/nwitter
// https://www.youtube.com/watch?v=wkdCpktUfGg

const firebaseConfig = {
  apiKey: "AIzaSyC4k9Gx8zcOtkU-xJxfo0QvK0vn3kl3nLw",
  authDomain: "projectauth-466ef.firebaseapp.com",
  projectId: "projectauth-466ef",
  storageBucket: "projectauth-466ef.appspot.com",
  messagingSenderId: "166852997284",
  appId: "1:166852997284:web:191f1f1d8b58e5bf92f631",
  measurementId: "G-1WLC1VNYVK"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

export const firebaseInstance = firebase;

export const dbService = firebase.firestore();

export const storageService = firebase.storage();
