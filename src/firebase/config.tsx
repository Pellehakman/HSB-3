import { initializeApp } from "firebase/app"; // no compat for new SDK
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBdOZEJcUOWI9Rhan-ABvDQD6gOSResSus",
  authDomain: "hsb-3-vue.firebaseapp.com",
  projectId: "hsb-3-vue",
  storageBucket: "hsb-3-vue.appspot.com",
  messagingSenderId: "84393067844",
  appId: "1:84393067844:web:db6701898106675c6b4311",
  measurementId: "G-BX9RDH50FQ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
