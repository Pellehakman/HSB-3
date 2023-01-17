import { defineComponent, ref, onMounted, computed } from "vue";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import {
  collection,
  orderBy,
  updateDoc,
  doc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import BookingDate from "../BookingDate/BookingDate.vue";
import BookingTime from "../BookingTime/BookingTime.vue";
import { useuserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import { sv } from "date-fns/locale";

export default defineComponent({
  name: "Booking-component",
  components: { BookingDate, BookingTime },

  async setup() {
    const router = useRouter();
    const userStore: any = useuserStore();
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "{}");
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(
      format(todayDate, "eeee d MMMM", { locale: sv })
    ).value;
    const ss = ref(format(todayDate, "Eeee d MMMM", { locale: sv })).value;
    console.log(ss);
    const awesome = ref(false);
    const readybook = ref(false);
    const timeValue = ref("");
    const dateObject = ref();
    const dateValue = ref(thisDayDate);

    if (userStore.deleteObj.date) {
      dateValue.value = userStore.deleteObj.date;
      timeValue.value = userStore.deleteObj.time;
    }
    if (userStore.deleteObj.date) {
      awesome.value = true;
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

    // get data from firebase and sort by timeID
    const dateRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(dateRef);
    const dateDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      // data.id = doc.id;
      return data;
    });

    async function handleConfirm() {
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const bookingDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });
      const findSlot = bookingDocs.filter((f) => {
        if (f.date === dateValue.value) {
          return f;
        }
      });

      const checkIfNull = findSlot.map(
        (b) => b[`${timeValue.value}`].bookingid
      );

      if (checkIfNull[0] != null) {
        console.log("välj ett annat datum");
      } else {
        readybook.value = true;
        console.log("please confirm");
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
      readybook.value = false;

      if (userStore.deleteObj.date) {
        const RemoveRef = doc(db, "calender", userStore.deleteObj.date);
        await updateDoc(RemoveRef, {
          [userStore.deleteObj.time]: {
            userid: null,
            bookingid: null,
            time: userStore.deleteObj.time,
            date: userStore.deleteObj.date,
          },
        });
      }
      if (awesome.value === true) {
        router.push({ path: "/user" });
      }
    }
    // end of submit

    return {
      submitBooking,
      dateDocs,
      timeValue,
      dateValue,
      BookingDayData,
      awesome,
      readybook,
      handleConfirm,
      DateObj,
      dateObject,
      BookingTimeData,
      thisDayDate,
    };
  },
});
