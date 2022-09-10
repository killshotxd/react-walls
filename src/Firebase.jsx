// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_ns8XZRdfL2OTp04Klvxuwqvel7D95BQ",
  authDomain: "uploadtiles.firebaseapp.com",
  projectId: "uploadtiles",
  storageBucket: "uploadtiles.appspot.com",
  messagingSenderId: "381323562427",
  appId: "1:381323562427:web:386ac25449df30193f089e",
  measurementId: "G-38HNM07EH3",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, storage };
