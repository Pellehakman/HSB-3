import database from "@/firebase/config";
import { ref } from "firebase/database";
import {
  collection,
  orderBy,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
const db = ref(database, "calender");

class FirebaseService {
  getAll() {
    return db;
  }
  async getCalender() {
    const firestore = getFirestore();
    const dateRef = query(collection(firestore, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(dateRef);
    const fetchFirebase = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    return fetchFirebase;
  }
}

const $firebaseService = new FirebaseService();
export default $firebaseService;
