import { defineStore, storeToRefs } from "pinia";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { ref } from "vue";
//Options
// export const useBookingStore = defineStore("bookingStore", {
//   // collect string to myData
//   state: () => ({
//     bookingArray: [],
//   }),

//   //send this back to wherever
//   getters: {
//     async BookingArray(state) {
//       const db = getFirestore();
//       const collectFireBase = query(
//         collection(db, "calender"),
//         orderBy("timeID")
//       );
//       const snapshots = await getDocs(collectFireBase);
//       const bookingArray = snapshots.docs.map((doc) => {
//         const data = doc.data();
//         return data;
//       });

//       return state.bookingArray;
//     },
//   },

//   // send editValue from click on "MyBookings" to state "myData"
//   actions: {
//     addBookingArray(bookingArray: never[]) {
//       this.bookingArray = bookingArray;
//       console.log(bookingArray);
//     },
//   },
// });
export const useBookingStore = defineStore("bookingStore", async () => {
  const db = getFirestore();
  const collectFireBase = query(collection(db, "calender"), orderBy("timeID"));
  const snapshots = await getDocs(collectFireBase);

  const bookingArray = ref(
    snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    })
  );
  // console.log(JSON.parse(JSON.stringify(bookingArray.value)));

  return JSON.parse(JSON.stringify(bookingArray.value));
});
