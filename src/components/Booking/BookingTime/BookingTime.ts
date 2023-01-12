import { computed, defineComponent, ref } from "vue";
// import { format, getTime } from "date-fns";

export default defineComponent({
  name: "BookingSlot",
  props: {
    todaysDate: String,
    date: String,
    timeValue: String,
  },
  emits: ["onTimeUpdate"],

  setup(props, { emit }) {
    // const thisTime = format(getTime(new Date()), "kk:00");

    // const time = "11:00 till 15:00";

    // const input = ref<HTMLElement | null>(null);
    // const activeTime = computed(() => time === time);

    function timeUpdate(event: any) {
      emit("onTimeUpdate", event.target.value);
    }

    return { timeUpdate };
  },
});
