import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCJ5QMe9rMkVr-BtttJULah1YE8IF5C5oc",
    authDomain: "finalprojectauth-276d2.firebaseapp.com",
    projectId: "finalprojectauth-276d2",
    storageBucket: "finalprojectauth-276d2.appspot.com",
    messagingSenderId: "418211052730",
    appId: "1:418211052730:web:f7d968ef996661c2c51683"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;