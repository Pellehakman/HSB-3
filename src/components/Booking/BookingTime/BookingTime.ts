import { defineComponent, onMounted, ref, watch } from "vue";
// import { format, getTime } from "date-fns";
import BookingDate from "../BookingDate/BookingDate.vue";

export default defineComponent({
  name: "BookingSlot",
  components: { BookingDate },
  emit: [],
  props: {
    dateObject: Object,
  },

  async setup(props, { emit }) {
    const uid = JSON.parse(sessionStorage.getItem("uid") || "{}");
    const dateObject = ref();
    watch(
      () => props.dateObject,
      () => {
        dateObject.value = props.dateObject;
      }
    );
    // const hej = props.dateObject;
    function timeUpdate(event: any) {
      emit("onTimeObj", event.target.value);
      console.log(event.target.value);
    }
    onMounted(() => {});

    return { timeUpdate, dateObject, uid };
  },
});
