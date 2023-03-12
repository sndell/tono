// import { initializeApp } from "firebase/app";
// import "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.FIREBASE_KEY,
//   authDomain: import.meta.env.FIREBASE_DOMAIN,
//   projectId: import.meta.env.FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.FIREBASE_SENDER_ID,
//   appId: import.meta.env.FIREBASE_APP_ID,
//   measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
