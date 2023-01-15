import { computed, defineComponent, onMounted, ref } from "vue";
import { useuserStore } from "../../../stores/userStore";
import {
  collection,
  orderBy,
  updateDoc,
  doc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

export default defineComponent({
  name: "BookingDay",
  props: {
    todaysDate: String,
    date: String,
  },
  emits: ["onDateUpdate", "onDateObj"],

  async setup(props, { emit }) {
    const db = getFirestore();
    const userStore: any = useuserStore();
    const input = ref<HTMLElement | null>(null);
    const focusView = ref(props.todaysDate);

    if (userStore.deleteObj.date) {
      focusView.value = userStore.deleteObj.date;
    } else {
      focusView.value = props.todaysDate;
    }

    const activeDate = computed(() => `${focusView.value}` === props.date);

    function dateUpdate(event: any) {
      emit("onDateUpdate", event.target.value);
      

     const a = mybookingsDocs
        .map((f) => f["07:00 till 11:00"])
        .filter((v) => v.date === event.target.value);

      const b = mybookingsDocs
        .map((f) => f["11:00 till 15:00"])
        .filter((v) => v.date === event.target.value);
        
      const c = mybookingsDocs
        .map((f) => f["15:00 till 19:00"])
        .filter((v) => v.date === event.target.value);

      const d = mybookingsDocs
        .map((f) => f["19:00 till 23:00"])
        .filter((v) => v.date === event.target.value);

      const findBookings = a.concat(b, c, d);
      console.log(findBookings)

      emit("onDateObj", findBookings);

    }

    onMounted(() => {
      if (userStore.deleteObj.date === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }

      if (props.todaysDate === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    });

    const bookingRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(bookingRef);
    const mybookingsDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });


    return { input, activeDate, dateUpdate };
  },
});
