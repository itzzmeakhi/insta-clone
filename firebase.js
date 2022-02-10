// Import the functions you need from the SDKs you need
import { 
  initializeApp,
  getApps,
  getApp 
} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK9u_yb1S7Cr3GG02pzneLpxZzokklQZ0",
  authDomain: "insta-407e4.firebaseapp.com",
  projectId: "insta-407e4",
  storageBucket: "insta-407e4.appspot.com",
  messagingSenderId: "1065029291833",
  appId: "1:1065029291833:web:b3e8dd98457dbcac00e2e8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };