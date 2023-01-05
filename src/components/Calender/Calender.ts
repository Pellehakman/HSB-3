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
import AddNewDay from "../AddNewDay/AddNewDay.vue";

export default defineComponent({
  name: "Calender",

  async setup() {
    const db = getFirestore();
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(format(todayDate, "E d MMMM")).value;

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
          timeID: formatISO(objects, { format: "basic" }),
          slot1: {
            time: "07:00 till 11:00",
            id: null,
          },
          slot2: {
            time: "11:00 till 15:00",
            id: null,
          },
          slot3: {
            time: "15:00 till 19:00",
            id: null,
          },
          slot4: {
            time: "19:00 till 23:00",
            id: null,
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
