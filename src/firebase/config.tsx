// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA6D3M5MaRX--UfPsippcNoHn-aQCypIvw",
  authDomain: "hsb-booking.firebaseapp.com",
  projectId: "hsb-booking",
  storageBucket: "hsb-booking.appspot.com",
  messagingSenderId: "799371879247",
  appId: "1:799371879247:web:dc8850bea40b89cfc9db3a",
  measurementId: "G-G51QFJ7XLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);