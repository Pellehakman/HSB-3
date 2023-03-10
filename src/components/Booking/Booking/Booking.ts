import { defineComponent, onMounted, ref } from "vue";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { useUserStore } from "@/stores/userStore";
import BookingDate from "../BookingDate/BookingDate.vue";
import BookingTime from "../BookingTime/BookingTime.vue";
import Meny from "@/components/Meny/Meny";
import $firebaseService from "@/services/FirebaseService";
import Help from "@/components/Help/Help.vue";
import { BookingHeading, handlePop, Abort } from "@/components/models/enums";
import type { TimeType } from "@/components/models/TimeType";

export default defineComponent({
  name: "Booking-component",
  components: { BookingDate, BookingTime, Meny, Help },

  async setup() {
    onMounted(async () => {
      const data = await $firebaseService.getCalender();
      calenderData.value = data;
    });

    const calenderData = ref<any>();
    const uid: string = JSON.parse(sessionStorage.getItem("uid") || "{}");
    const userStore = useUserStore();
    const todayDate = ref(new Date()).value;
    const handleEdit = ref<boolean>(false);
    const handlePopup = ref<string>("");
    const timeValue = ref<string>("");
    const dateObject = ref<TimeType>();
    console.log(dateObject.value);
    const tooManyBookings = ref<boolean>(false);
    const thisDayDate = ref<string | any>(
      format(todayDate, "eeee d MMMM", { locale: sv })
    ).value;
    const dateValue = ref<string | any>(thisDayDate);

    if (userStore.editObject.date) {
      dateValue.value = userStore.editObject.date;
      timeValue.value = userStore.editObject.time;
    }
    const h2Message = ref<string>("Välj tid för att boka");
    const btnMsg = ref<string>("");
    if (userStore.editObject.date) {
      handleEdit.value = true;
      h2Message.value = BookingHeading.edit;
      btnMsg.value = BookingHeading.edit;
    }
    const passedActive = ref(false);
    function checkIfDayPassed() {
      const aTime: Number = dateValue.value.match(/\d+/g).map(Number);
      const bTime: Number = thisDayDate.match(/\d+/g).map(Number);
      if (bTime <= aTime) {
        btnMsg.value = "Boka tid";
        h2Message.value = BookingHeading.title;
        passedActive.value = false;
        dateValue.value;
      } else {
        timeValue.value = "";
        h2Message.value = BookingHeading.passed;
        passedActive.value = true;
      }
    }
    const BookingDayData = (chosenDate: string) => {
      dateValue.value = chosenDate;
      checkIfDayPassed();
    };

    const BookingTimeData = (chosenTime: string) => {
      timeValue.value = chosenTime;
      checkIfDayPassed();
    };

    const DateObj = (dateObj: TimeType) => {
      dateObject.value = dateObj;
    };

    async function handleConfirm() {
      checkIfDayPassed();
      const findSlot = calenderData.value.filter((f: { date: string }) => {
        if (f.date === dateValue.value) {
          return f;
        }
      });

      function getUserBookingsBySlot(slot: string) {
        return calenderData.value
          .map((f: { [x: string]: any }) => f[slot])
          .filter((v: { userid: any }) => v.userid === uid);
      }
      function getAllUserBookings() {
        const a = getUserBookingsBySlot("07:00 till 11:00");
        const b = getUserBookingsBySlot("11:00 till 15:00");
        const c = getUserBookingsBySlot("15:00 till 19:00");
        const d = getUserBookingsBySlot("19:00 till 23:00");
        return a.concat(b, c, d);
      }

      const findBookings = getAllUserBookings();

      // allow three max "4" bookings if "edit mode"
      const bookingsAllowed = ref(2);
      if (userStore.editObject.date) {
        bookingsAllowed.value = 3;
      }
      if (findBookings.length > bookingsAllowed.value) {
        handlePopup.value = handlePop.tooMany;
      } else {
        const checkIfNull = findSlot.map(
          (b: any) => b[`${timeValue.value}`].bookingid
        );
        if (checkIfNull[0] != null) {
          //
        } else {
          handlePopup.value = handlePop.confirm;
        }
      }
    }
    const submitPing = ref(false);
    function submitEffect() {
      submitPing.value = true;
      setInterval(submitBooking, 400);
    }

    function submitBooking() {
      $firebaseService.postBooking(dateValue.value, timeValue.value, uid);

      if (userStore.editObject.date) {
        $firebaseService.updateBooking(userStore);
      }

      handlePopup.value = "";
    }

    function abortEdit() {
      userStore.$reset();
      handleEdit.value = false;
      btnMsg.value = "Boka tid";
    }
    return {
      BookingHeading,
      submitEffect,
      submitPing,
      timeValue,
      dateValue,
      BookingDayData,
      handleEdit,
      handlePopup,
      handleConfirm,
      DateObj,
      dateObject,
      BookingTimeData,
      thisDayDate,
      btnMsg,
      abortEdit,
      tooManyBookings,
      calenderData,
      h2Message,
      handlePop,
      passedActive,
      Abort,
    };
  },
});
