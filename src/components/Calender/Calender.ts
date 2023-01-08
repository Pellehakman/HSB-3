import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useuserStore } from "../../stores/userStore";
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
import AddNewDay from "../AddNewDay/AddNewDay.vue";

export default defineComponent({
  name: "Calender",

  async setup() {
    const db = getFirestore();
    const todayDate = ref(new Date()).value;
    const userStore: any = useuserStore();
    const { BookingObject } = storeToRefs(userStore);

    console.log("this is calender", userStore.myObj.date);

    async function createDate() {
      const daysInMonth = getDaysInMonth(todayDate);
      const weekStartDate = startOfWeek(todayDate);

      for (let day = 0; day < daysInMonth; day++) {
        // create date with correct format to loop over
        let object = ref(format(addDays(weekStartDate, day), "E d MMMM")).value;
        // create date with NO format to loop over
        let objects = ref(addDays(weekStartDate, day)).value;

        await setDoc(doc(db, "calender", `${object}`), {
          date: format(addDays(weekStartDate, day), "E d MMMM"),
          timeID: objects.toISOString(),
          slot1: {
            time: "07:00 till 11:00",
            userid: null,
            bookingid: null,
            date: format(addDays(weekStartDate, day), "E d MMMM"),
          },
          slot2: {
            time: "11:00 till 15:00",
            userid: null,
            bookingid: null,
            date: format(addDays(weekStartDate, day), "E d MMMM"),
          },
          slot3: {
            time: "15:00 till 19:00",
            userid: null,
            bookingid: null,
            date: format(addDays(weekStartDate, day), "E d MMMM"),
          },
          slot4: {
            time: "19:00 till 23:00",
            userid: null,
            bookingid: null,
            date: format(addDays(weekStartDate, day), "E d MMMM"),
          },
        });
      }
    }
    return {
      createDate,
    };
  },
  components: { AddNewDay },
});
