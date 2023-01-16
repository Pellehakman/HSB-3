import { computed, defineComponent, onMounted, ref } from "vue";
import { useuserStore } from "../../../stores/userStore";
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
    console.log(onDateRef.value);

    function dateUpdate(date: any) {
      emit("onDateUpdate", onDateRef.value);

      if (date === undefined) {
        userStore.addDateString(props.todaysDate);
      } else {
        userStore.addDateString(date);
      }
    }

    onMounted(() => {
      dateUpdate(props.todaysDate);
      if (userStore.deleteObj.date === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }

      if (props.todaysDate === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    });

    if (userStore.deleteObj.date) {
      focusView.value = userStore.deleteObj.date;
    } else {
      // eslint-disable-next-line vue/no-setup-props-destructure
      focusView.value = props.todaysDate;
    }

    const activeDate = computed(() => `${focusView.value}` === props.date);

    return { input, activeDate, dateUpdate };
  },
});
