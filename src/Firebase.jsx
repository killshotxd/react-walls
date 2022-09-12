// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import {
  doc,
  getFirestore,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

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
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// -------------Functions-------------------------

// -------------Updating user to db-------------
const updateUserDb = async (user, uid) => {
  if (typeof user !== "object") return;
  const docRef = doc(db, "users", uid);
  await setDoc(docRef, { ...user, uid });
};

// -------------Getting user from db-------------

const getUserFromDb = async (uid) => {
  const docRef = doc(db, "users", uid);
  const result = await getDoc(docRef);

  if (!result.exists()) return null;
  return result.data();
};

export { auth, storage, updateUserDb, getUserFromDb };
