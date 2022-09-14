import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASj2hnGkXSy5EyM-FqIB8j59p_ANxY6zI",
  authDomain: "readers-library-71fe8.firebaseapp.com",
  projectId: "readers-library-71fe8",
  storageBucket: "readers-library-71fe8.appspot.com",
  messagingSenderId: "506730010689",
  appId: "1:506730010689:web:0e93919c50c81d760d0ec0",
  measurementId: "G-NTW5P65ETZ",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const db = getFirestore();

export const createUserDocumentWithAuth = async (userAuth, additional = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additional,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user: email already in use");
      } else {
        console.log(error.message);
      }
    }
  }
  return userDocRef;
};
