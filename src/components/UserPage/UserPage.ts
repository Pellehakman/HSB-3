import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { defineComponent, ref } from "vue";
import { useuserStore } from "../../stores/userStore";
import { useRouter } from "vue-router";
import $firebaseService from "@/services/FirebaseService";

export default defineComponent({
  name: "UserPage",

  async setup() {
    const router = useRouter();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "");
    const userStore: any = useuserStore();
    userStore.$reset();
    const calenderData = await $firebaseService.getCalender();

    const handlePopup = ref("");
    const activeBooking = ref();
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(
      format(todayDate, "eeee d MMMM", { locale: sv })
    ).value;

    function getUserBookingsBySlot(slot: string) {
      return calenderData.map((f) => f[slot]).filter((v) => v.userid === uid);
    }

    function getAllUserBookings() {
      const a = getUserBookingsBySlot("07:00 till 11:00");
      const b = getUserBookingsBySlot("11:00 till 15:00");
      const c = getUserBookingsBySlot("15:00 till 19:00");
      const d = getUserBookingsBySlot("19:00 till 23:00");
      return a.concat(b, c, d);
    }
    const findBookings = getAllUserBookings();
    const displayBtn = ref(false);

    const handleActiveBooking = (event: any) => {
      displayBtn.value = true;
      const editValue: string = ref(event.target.id).value;
      const findBookingID = Object(
        findBookings.filter((f: any) => f.bookingid === editValue)
      );
      activeBooking.value = findBookingID[0];
      userStore.addBookingObj(findBookingID[0]);
    };

    function handleRemove() {
      handlePopup.value = "handleRemove";
    }

    async function submitRemove() {
      $firebaseService.removeBooking(activeBooking.value, userStore);
    }

    function handleEdit() {
      console.log(userStore.editObject.date);
      if (userStore.editObject.date) {
        router.push({ path: "/home" });
      }
    }

    return {
      findBookings,
      handleActiveBooking,
      handleRemove,
      submitRemove,
      handleEdit,
      thisDayDate,
      handlePopup,
      activeBooking,
      displayBtn,
      userStore,
    };
  },
  components: {},
});
