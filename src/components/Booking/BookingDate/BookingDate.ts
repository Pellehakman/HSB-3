import { computed, defineComponent, onMounted, ref } from "vue";
import { useuserStore } from "../../../stores/userStore";
import {
  collection,
  orderBy,
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
    const input = ref<HTMLElement | null>(null);
    const focusView = ref(props.todaysDate);
    const onDateRef = ref(props.todaysDate);
    const userStore: any = useuserStore();
    const db = getFirestore();

    onMounted(() => {
      dateUpdate(props.todaysDate);
      if (userStore.editObject.date === props.date && input.value != null) {
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
    function dateUpdate(date: any) {
      onDateRef.value = date;

      const a = mybookingsDocs
        .map((f) => f["07:00 till 11:00"])
        .filter((v) => v.date === onDateRef.value);

      const b = mybookingsDocs
        .map((f) => f["11:00 till 15:00"])
        .filter((v) => v.date === onDateRef.value);

      const c = mybookingsDocs
        .map((f) => f["15:00 till 19:00"])
        .filter((v) => v.date === onDateRef.value);

      const d = mybookingsDocs
        .map((f) => f["19:00 till 23:00"])
        .filter((v) => v.date === onDateRef.value);

      const findBookings = a.concat(b, c, d);
      emit("onDateObj", findBookings);
      emit("onDateUpdate", onDateRef.value);
    }

    if (userStore.editObject.date) {
      focusView.value = userStore.editObject.date;
    } else {
      // eslint-disable-next-line vue/no-setup-props-destructure
      focusView.value = props.todaysDate;
    }

    const activeDate = computed(() => `${focusView.value}` === props.date);

    return { input, activeDate, dateUpdate };
  },
});
