import { computed, defineComponent, onMounted, ref } from "vue";
import { format, getTime } from "date-fns";

export default defineComponent({
  name: "BookingSlot",
  props: {
    todaysDate: String,
    date: String,
    timeValue: String,
  },
  emits: ["onTimeUpdate"],

  setup(props, { emit }) {
    const thisTime = format(getTime(new Date()), "kk:00");
    console.log(thisTime);
    console.log(props.timeValue);

    const time = "11:00 till 15:00";
    // console.log(props.todaysDate === props.date)
    const input = ref<HTMLElement | null>(null);
    const activeTime = computed(() => time === time);

    function timeUpdate(event: any) {
      emit("onTimeUpdate", event.target.value);
      console.log(event.target.value);
    }

    // onMounted(() => {
    // if(  props.timeValue === props.date && input.value != null){
    //     // console.log('hjek', input.value)
    //     input.value.scrollIntoView();
    // }

    //   });

    return { input, timeUpdate, activeTime };
  },
});
