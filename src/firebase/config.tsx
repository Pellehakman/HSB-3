import { initializeApp } from "firebase/app"; // no compat for new SDK
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyA6D3M5MaRX--UfPsippcNoHn-aQCypIvw",
  authDomain: "hsb-booking.firebaseapp.com",
  projectId: "hsb-booking",
  storageBucket: "hsb-booking.appspot.com",
  messagingSenderId: "799371879247",
  appId: "1:799371879247:web:dc8850bea40b89cfc9db3a",
  measurementId: "G-G51QFJ7XLX",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
