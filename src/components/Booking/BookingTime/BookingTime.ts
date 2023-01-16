import { defineComponent, onMounted, ref } from "vue";
// import { format, getTime } from "date-fns";
import BookingDate from "../BookingDate/BookingDate.vue";
import { useuserStore } from "../../../stores/userStore";
import {
  collection,
  orderBy,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
export default defineComponent({
  name: "BookingSlot",
  components: { BookingDate },

  async setup() {
    function timeUpdate() {
      const a = mybookingsDocs
        .map((f) => f["07:00 till 11:00"])
        .filter((v) => v.date === userStore.dateString);

      const b = mybookingsDocs
        .map((f) => f["11:00 till 15:00"])
        .filter((v) => v.date === userStore.dateString);

      const c = mybookingsDocs
        .map((f) => f["15:00 till 19:00"])
        .filter((v) => v.date === userStore.dateString);

      const d = mybookingsDocs
        .map((f) => f["19:00 till 23:00"])
        .filter((v) => v.date === userStore.dateString);

      const findBookings = a.concat(b, c, d);

      console.log(findBookings);
    }
    onMounted(() => {
      timeUpdate();
      console.log("from here", userStore.dateString);
    });
    const db = getFirestore();
    const userStore: any = useuserStore();
    const bookingRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(bookingRef);
    const mybookingsDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    console.log(userStore.timeObj);
    // if (event === undefined) {
    //   onDateRef.value = props.todaysDate;
    // } else {
    //   onDateRef.value = event.target.value;
    // }

    return { timeUpdate };
  },
});
