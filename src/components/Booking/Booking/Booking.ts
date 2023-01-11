import { defineComponent, ref, onMounted, nextTick } from "vue";
import { format, getTime } from "date-fns";
import { nanoid } from "nanoid";
import {
  collection,
  orderBy,
  updateDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore";
import BookingDate from "../BookingDate/BookingDate.vue";
import BookingSlot from "../BookingTime/BookingTime.vue";

export default defineComponent({
  name: "Booking",
  components: { BookingDate, BookingSlot },
  props: {
    title: String,
  },

  async setup(props) {
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "{}");
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(format(todayDate, "E d MMMM")).value;
    const dateValue = ref(thisDayDate);
    const timeValue = ref("");
    console.log(timeValue);

    const BookingDayData = (chosenDate: string) => {
      // console.log(chosenDate)
      dateValue.value = chosenDate;
    };

    const BookingTimeData = (chosenTime: string) => {
      // console.log(chosenTime)
      timeValue.value = chosenTime;
    };

    // get data from firebase and sort by timeID
    const dateRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(dateRef);
    const dateDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });

    // FUNCTION this is submit
    async function submitBooking() {
      // new ref from firebase that runs every submit
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const bookingDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      // filter slot from firebase with date value from form
      const findSlot = bookingDocs.filter((f) => {
        if (f.date === dateValue.value) {
          return f;
        }
      });

      //get ref from firebase from collection with specific dateValue "calender"
      const updateRef = doc(db, "calender", dateValue.value);

      // push to firebase from slot1
      if (timeValue.value) {
        const checkIfNull = findSlot.map(
          (b) => b[`${timeValue.value}`].bookingid
        );
        if (checkIfNull[0] === null) {
          console.log("Success");
          await updateDoc(updateRef, {
            [`${timeValue.value}`]: {
              userid: uid,
              bookingid: nanoid(),
              time: timeValue.value,
              date: dateValue.value,
            },
          });
        } else {
          return console.log("already booked");
        }
      }
    }
    // end of submit

    return {
      submitBooking,
      dateDocs,
      timeValue,
      dateValue,
      BookingDayData,
      BookingTimeData,
    };
  },
});
