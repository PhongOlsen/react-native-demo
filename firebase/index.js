import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9Rv2AtXiTutF92uxxpbWvw6J0hjvWOJo",
    authDomain: "native-chat-a7272.firebaseapp.com",
    projectId: "native-chat-a7272",
    storageBucket: "native-chat-a7272.appspot.com",
    messagingSenderId: "505782803158",
    appId: "1:505782803158:web:44140214638aad7a2ac777",
    measurementId: "G-7KBE0KD2RQ"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };