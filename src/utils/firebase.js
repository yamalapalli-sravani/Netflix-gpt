// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfg2wKTUghS_eQoPRTDmNjEnYPIpMOQg",
  authDomain: "netflixgpt-86c73.firebaseapp.com",
  projectId: "netflixgpt-86c73",
  storageBucket: "netflixgpt-86c73.appspot.com",
  messagingSenderId: "11280678147",
  appId: "1:11280678147:web:49d87ea3a7732bc58c7d36",
  measurementId: "G-XKZBEESX5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
