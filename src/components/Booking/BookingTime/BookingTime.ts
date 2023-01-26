import { defineComponent, onMounted, ref, watch } from "vue";
// import { format, getTime } from "date-fns";
import BookingDate from "../BookingDate/BookingDate.vue";
import { useuserStore } from "@/stores/userStore";

export default defineComponent({
  name: "BookingSlot",
  components: { BookingDate },
  emit: [],
  props: {
    dateObject: Object,
    passedActive: Boolean,
  },

  async setup(props, { emit }) {

    const userStore: any = useuserStore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "{}");
    const refDateObject = ref();
    const refPassedActive = ref();










    // HÄR SLUTADE DU, ta in ONUPDATE FRÅN BOOKING DATE SÅ ATT DET UPPDATERAS I
    // REALTID. Så om dag uppdateras, checked = false
    // const BookingDayData = (chosenDate: string) => {
    //   dateValue.value = chosenDate;
    //   checkIfDayPassed();
    //   console.log(chosenDate)
    // };












    
    // eslint-disable-next-line prettier/prettier
    watch(() => props.dateObject, () => { refDateObject.value = props.dateObject });
    // eslint-disable-next-line prettier/prettier
    watch(() => props.passedActive, () => { refPassedActive.value = props.passedActive});

    function timeUpdate(event: any) {
      emit("onTimeObj", event.target.value);
      console.log(event.target.value);
    }
    onMounted(() => {});

    return { timeUpdate, refDateObject, uid, userStore, props };
  },
});
