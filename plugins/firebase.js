import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.ANEXT_PUBLIC_PPID,
  measurementId: process.env.NEXT_PUBLIC_APPID,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export default firebaseApp;
