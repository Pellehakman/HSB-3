import { defineComponent, ref } from "vue";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import { updateDoc, doc, getFirestore } from "firebase/firestore";
import BookingDate from "../BookingDate/BookingDate.vue";
import BookingTime from "../BookingTime/BookingTime.vue";
import { useuserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import { sv } from "date-fns/locale";
import Meny from "@/components/Meny/Meny";
import { useBookingStore } from "@/stores/bookingStore";

export default defineComponent({
  name: "Booking-component",
  components: { BookingDate, BookingTime, Meny },

  async setup() {
    const bookingStore: any = useBookingStore();
    const bookingArray = JSON.parse(JSON.stringify(bookingStore.bookingArray));

    console.log(bookingStore.bookingArray);
    const router = useRouter();
    const userStore: any = useuserStore();
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "{}");
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(
      format(todayDate, "eeee d MMMM", { locale: sv })
    ).value;

    const handleEdit = ref(false);
    const btnMsg = ref("Boka tid");
    if (userStore.editObject.date) {
      handleEdit.value = true;
      btnMsg.value = "Ändra tid";
    }

    const handlePopup = ref("");
    const timeValue = ref("");
    const dateObject = ref();
    const dateValue = ref(thisDayDate);
    const tooManyBookings = ref(false);

    if (userStore.editObject.date) {
      dateValue.value = userStore.editObject.date;
      timeValue.value = userStore.editObject.time;
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
      const findSlot = bookingArray.filter((f: { date: string }) => {
        if (f.date === dateValue.value) {
          return f;
        }
      });

      // gör egen komponent
      const a = bookingArray
        .map((f: { [x: string]: any }) => f["07:00 till 11:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const b = bookingArray
        .map((f: { [x: string]: any }) => f["11:00 till 15:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const c = bookingArray
        .map((f: { [x: string]: any }) => f["15:00 till 19:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const d = bookingArray
        .map((f: { [x: string]: any }) => f["19:00 till 23:00"])
        .filter((v: { userid: any }) => v.userid === uid);

      const findBookings = a.concat(b, c, d);
      // allow three max 4 bookings if "edit mode"
      console.log(findBookings);
      const bookingsAllowed = ref(2);
      if (userStore.editObject.date) {
        bookingsAllowed.value = 3;
      }
      if (findBookings.length > bookingsAllowed.value) {
        handlePopup.value = "tooMany";
      } else {
        const checkIfNull = findSlot.map(
          (b: { [x: string]: { bookingid: any } }) =>
            b[`${timeValue.value}`].bookingid
        );

        if (checkIfNull[0] != null) {
          console.log("välj ett annat datum");
        } else {
          handlePopup.value = "confirm";
          console.log("please confirm");
        }
      }
    }

    // FUNCTION this is submit
    async function submitBooking() {
      // new ref from firebase that runs every submit
      // filter slot from firebase with date value from form
      const updateRef = doc(db, "calender", dateValue.value);
      await updateDoc(updateRef, {
        [`${timeValue.value}`]: {
          userid: uid,
          bookingid: nanoid(),
          time: timeValue.value,
          date: dateValue.value,
        },
      });
      console.log("you have booked");
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
      submitBooking,

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
      bookingArray,
    };
  },
});
