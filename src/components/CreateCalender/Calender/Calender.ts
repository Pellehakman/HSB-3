import { defineComponent, ref } from "vue";
import { format, addDays, startOfWeek, getDaysInMonth } from "date-fns";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import AddNewDay from "../AddNewDay/AddNewDay.vue";

export default defineComponent({
  name: "Calender-s",

  async setup() {
    const db = getFirestore();
    const todayDate = ref(new Date()).value;
    // const userStore: any = useuserStore();

    async function createDate() {
      const daysInMonth = getDaysInMonth(todayDate);
      const weekStartDate = startOfWeek(todayDate);

      for (let day = 0; day < daysInMonth; day++) {
        // create date with correct format to loop over
        const object = ref(
          format(addDays(weekStartDate, day), "E d MMMM")
        ).value;
        // create date with NO format to loop over
        const objects = ref(addDays(weekStartDate, day)).value;

        await setDoc(doc(db, "calender", `${object}`), {
          date: format(addDays(weekStartDate, day), "E d MMMM"),
          timeID: objects.toISOString(),
          ["07:00 till 11:00"]: {
            time: "07:00 till 11:00",
            userid: null,
            bookingid: null,
            date: format(addDays(weekStartDate, day), "E d MMMM"),
          },
          ["11:00 till 15:00"]: {
            time: "11:00 till 15:00",
            userid: null,
            bookingid: null,
            date: format(addDays(weekStartDate, day), "E d MMMM"),
          },
          ["15:00 till 19:00"]: {
            time: "15:00 till 19:00",
            userid: null,
            bookingid: null,
            date: format(addDays(weekStartDate, day), "E d MMMM"),
          },
          ["19:00 till 23:00"]: {
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
