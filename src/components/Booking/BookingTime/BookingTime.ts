import { computed, defineComponent, ref } from "vue";
// import { format, getTime } from "date-fns";
import BookingDate from "../BookingDate/BookingDate.vue";

export default defineComponent({
  name: "BookingSlot",
  components: { BookingDate },
  props: {
    todaysDate: String,
    date: String,
    timeValue: String,
  },
  emits: ["onTimeUpdate"],

  setup(props, { emit }) {
    const dateValue = ref();
    const BookingDayData = (chosenDate: string) => {
      dateValue.value = chosenDate;
      console.log(chosenDate);
    };

    function timeUpdate(event: any) {
      emit("onTimeUpdate", event.target.value);
    }

    return { timeUpdate, BookingDayData };
  },
});
