import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


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
