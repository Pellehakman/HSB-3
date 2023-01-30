import { computed, defineComponent, onMounted, ref } from "vue";
import { useUserStore } from "../../../stores/userStore";
import $firebaseService from "@/services/FirebaseService";
import type { TimeType } from "@/components/models/TimeType";
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
    const userStore: any = useUserStore();

    onMounted(async () => {
      const data = await $firebaseService.getCalender();
      calenderData.value = data;

      dateUpdate(props.todaysDate);
      if (userStore.editObject.date === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }

      if (props.todaysDate === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    });

    const calenderData = ref();
    function dateUpdate(date: any) {
      onDateRef.value = date;
      function getUserBookingsBySlot(slot: string) {
        return calenderData.value
          .map((f: { [slot: string]: any }) => f[slot])
          .filter(
            (v: { date: string | undefined }) => v.date === onDateRef.value
          );
      }

      function getAllUserBookings() {
        const a = getUserBookingsBySlot("07:00 till 11:00");
        const b = getUserBookingsBySlot("11:00 till 15:00");
        const c = getUserBookingsBySlot("15:00 till 19:00");
        const d = getUserBookingsBySlot("19:00 till 23:00");
        return a.concat(b, c, d);
      }
      const findBookings: TimeType = getAllUserBookings();
      console.log(JSON.parse(JSON.stringify(findBookings)));
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
