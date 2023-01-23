import { defineComponent, ref } from "vue";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import { sv } from "date-fns/locale";
import { updateDoc, doc, getFirestore } from "firebase/firestore";
import { useuserStore } from "@/stores/userStore";
import { useFireStore } from "@/stores/firestore";
import { useRouter } from "vue-router";
import BookingDate from "../BookingDate/BookingDate.vue";
import BookingTime from "../BookingTime/BookingTime.vue";
import Meny from "@/components/Meny/Meny";
import fetchFireBase from "@/components/functions/fetchFireBase/fetchFireBase";

export default defineComponent({
  name: "Booking-component",
  components: { fetchFireBase, BookingDate, BookingTime, Meny },

  async setup() {
    const uid = JSON.parse(sessionStorage.getItem("uid") || "{}");
    const fireStore = useFireStore();
    const router = useRouter();
    const userStore: any = useuserStore();
    const db = getFirestore();

    const todayDate = ref(new Date()).value;
    const handleEdit = ref(false);
    const handlePopup = ref("");
    const timeValue: any = ref("");
    const dateObject = ref();
    const tooManyBookings = ref(false);
    const thisDayDate = ref(
      format(todayDate, "eeee d MMMM", { locale: sv })
    ).value;
    const dateValue = ref(thisDayDate);

    if (userStore.editObject.date) {
      dateValue.value = userStore.editObject.date;
      timeValue.value = userStore.editObject.time;
    }

    const btnMsg = ref("Boka tid");
    if (userStore.editObject.date) {
      handleEdit.value = true;
      btnMsg.value = "Ändra tid";
    }

    const BookingDayData = (chosenDate: string) => {
      dateValue.value = chosenDate;
    };

    const BookingTimeData = (chosenTime: string) => {
      timeValue.value = chosenTime;
    };

    const DateObj = (dateObj: Object) => {
      dateObject.value = dateObj;
    };

    async function handleConfirm() {
      const findSlot = fireStore.fireArray.filter((f) => {
        if (f.date === dateValue.value) {
          return f;
        }
      });

      const a = fireStore.fireArray
        .map((f: { [x: string]: any }) => f["07:00 till 11:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const b = fireStore.fireArray
        .map((f: { [x: string]: any }) => f["11:00 till 15:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const c = fireStore.fireArray
        .map((f: { [x: string]: any }) => f["15:00 till 19:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const d = fireStore.fireArray
        .map((f: { [x: string]: any }) => f["19:00 till 23:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const findBookings = a.concat(b, c, d);

      // allow three max "4" bookings if "edit mode"
      const bookingsAllowed = ref(2);
      if (userStore.editObject.date) {
        bookingsAllowed.value = 3;
      }
      if (findBookings.length > bookingsAllowed.value) {
        handlePopup.value = "tooMany";
      } else {
        const checkIfNull = findSlot.map(
          (b: any) => b[`${timeValue.value}`].bookingid
        );

        if (checkIfNull[0] != null) {
          // console.log("välj ett annat datum");
        } else {
          handlePopup.value = "confirm";
          // console.log("please confirm");
        }
      }
    }
    //effect when you book
    const submitPing = ref(false);
    function submitEffect() {
      submitPing.value = true;
      setInterval(submitBooking, 300);
    }
    async function submitBooking() {
      const updateRef = doc(db, "calender", dateValue.value);
      await updateDoc(updateRef, {
        [`${timeValue.value}`]: {
          userid: uid,
          bookingid: nanoid(),
          time: timeValue.value,
          date: dateValue.value,
        },
      });
      // console.log("you have booked");
      handlePopup.value = "";

      // Remove booking
      if (userStore.editObject.date) {
        const RemoveRef = doc(db, "calender", userStore.editObject.date);
        await updateDoc(RemoveRef, {
          [userStore.editObject.time]: {
            userid: null,
            bookingid: null,
            time: userStore.editObject.time,
            date: userStore.editObject.date,
          },
        });
      }

      if (handleEdit.value === true) {
        router.push({ path: "/user" });
      } else {
        window.location.reload();
      }
    }
    // end of submit
    function abortEdit() {
      userStore.$reset();
      handleEdit.value = false;
      btnMsg.value = "Boka tid";
    }
    return {
      // submitBooking,
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
      fireStore,
    };
  },
});
