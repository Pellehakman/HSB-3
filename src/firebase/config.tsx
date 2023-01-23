// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBdOZEJcUOWI9Rhan-ABvDQD6gOSResSus",
  authDomain: "hsb-3-vue.firebaseapp.com",
  projectId: "hsb-3-vue",
  storageBucket: "hsb-3-vue.appspot.com",
  messagingSenderId: "84393067844",
  appId: "1:84393067844:web:db6701898106675c6b4311",
  measurementId: "G-BX9RDH50FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
