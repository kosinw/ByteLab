import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDsfiwmksngWJr3nttiyr_jjVloU-7MIow",
    authDomain: "hack-hw19.firebaseapp.com",
    databaseURL: "https://hack-hw19.firebaseio.com",
    projectId: "hack-hw19",
    storageBucket: "hack-hw19.appspot.com",
    messagingSenderId: "759165231345"
};

firebase.initializeApp(config);

export const db = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
