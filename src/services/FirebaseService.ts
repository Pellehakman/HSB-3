import database from "@/firebase/config";
import { ref } from "firebase/database";
import { nanoid } from "nanoid";
import {
  collection,
  orderBy,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  doc,
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
  async postBooking(dateValue: any, timeValue: any, uid: any) {
    const firestore = getFirestore();
    const updateRef = doc(firestore, "calender", dateValue);
    await updateDoc(updateRef, {
      [`${timeValue}`]: {
        userid: uid,
        bookingid: nanoid(),
        time: timeValue,
        date: dateValue,
      },
    });
    window.location.reload();
  }
}

const $firebaseService = new FirebaseService();
export default $firebaseService;
