import { defineComponent, ref } from "vue";
import {
  format,
  addDays,
  startOfWeek,
  getDaysInMonth,
  nextDay,
  endOfMonth,
  formatISO,
} from "date-fns";
import {
  doc,
  getFirestore,
  setDoc,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import RemoveDay from "./RemoveDay/RemoveDay.vue";

export default defineComponent({
  components:{RemoveDay},
  name: "AddNewDay",
  setup() {
    const db = getFirestore();
    const todayDate = ref(new Date()).value;


    async function addNewDay() {
      const daysInMonth = getDaysInMonth(todayDate);
      const addDay = addDays(todayDate, daysInMonth);
      const addDayFormat = ref(format(addDay, "E d MMMM")).value;

      // get ref from firebase
      const addDayRef = query(collection(db, "calender"));
      const snapshots = await getDocs(addDayRef);
      const addDayDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      // Check if date in "calender"-collection exists in firebase
      const existingDays = addDayDocs.map((f) => f.date);
      if (existingDays.includes(addDayFormat)) {
        console.log("already a day with same date");
        return;
      } else {
        console.log("lets add day");
        await setDoc(doc(db, "calender", `${addDayFormat}`), {
          date: addDayFormat,
          timeID: formatISO(addDay, { format: "basic" }),
          slot1: {
            time: "07:00 till 11:00",
            userid: null,
            bookingid: null,
          },
          slot2: {
            time: "11:00 till 15:00",
            userid: null,
            bookingid: null,
          },
          slot3: {
            time: "15:00 till 19:00",
            userid: null,
            bookingid: null,
          },
          slot4: {
            time: "19:00 till 23:00",
            userid: null,
            bookingid: null,
          },
        });
      }
    }

    setInterval(() => {
      addNewDay();
    }, 864023523);
    return {
      addNewDay,
    };
  },
});
