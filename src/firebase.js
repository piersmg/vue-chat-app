import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    apiKey: "AIzaSyCKf_3zo_AW2AnzgTJL5J8xxkMAfFg5Aik",
    authDomain: "vue-chat-app-e3971.firebaseapp.com",
    databaseURL: "https://vue-chat-app-e3971.firebaseio.com",
    projectId: "vue-chat-app-e3971",
    storageBucket: "vue-chat-app-e3971.appspot.com",
    messagingSenderId: "568599615780",
    appId: "1:568599615780:web:045df33b0e18a6a548fbb1"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
