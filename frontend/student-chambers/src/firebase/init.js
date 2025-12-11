// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, orderBy, limit, query, doc, getDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqbztY-F3dOoIyyrpz_Ku27Kh9Z-F4enc",
  authDomain: "growth-properties.firebaseapp.com",
  databaseURL: "https://my-portfolio-637e8-default-rtdb.firebaseio.com",
  projectId: "growth-properties",
  storageBucket: "growth-properties.appspot.app",
  messagingSenderId: "1078130208149",
  appId: "1:1078130208149:web:051b466a2e9dbe82821a9c",
  measurementId: "G-YTF759DSFH"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const analytics = getAnalytics(app);

