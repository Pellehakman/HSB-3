import { computed, defineComponent, onMounted, ref } from "vue";
import { useuserStore } from "../../stores/userStore";
export default defineComponent({
  name: "BookingDay",
  props: {
    todaysDate: String,
    date: String,
  },
  emits: ["onDateUpdate"],

  setup(props, { emit }) {
    const userStore: any = useuserStore();

    const input = ref<HTMLElement | null>(null);
    console.log(input.value);

    const focusView = ref(props.todaysDate);

    if (userStore.myObj.date) {
      focusView.value = userStore.myObj.date;
    } else {
      focusView.value = props.todaysDate;
    }

    const activeDate = computed(() => `${focusView.value}` === props.date);

    function dateUpdate(event: any) {
      emit("onDateUpdate", event.target.value);
    }

    onMounted(() => {
      
      if (userStore.myObj.date === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }

      if (props.todaysDate === props.date && input.value != null) {
        input.value.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
      
    });

    return { input, activeDate, dateUpdate };
  },
});
