import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA52QjUHTWxzQNwov2WLjALARPilv-xhD8",
  authDomain: "devter-cfa36.firebaseapp.com",
  projectId: "devter-cfa36",
  storageBucket: "devter-cfa36.appspot.com",
  messagingSenderId: "1029174180985",
  appId: "1:1029174180985:web:1fa753710d90ad93bb28a8",
  measurementId: "G-3T7PQHHV8Z",
};

firebase.initializeApp(firebaseConfig);

export const LoginWithGithub = () => {
  const githubProvider = new firebase();
};
