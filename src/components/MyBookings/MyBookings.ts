import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";
import { defineComponent, onMounted, ref } from "vue";
import { useuserStore } from "../../stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "mybookings",

  async setup() {
    const router = useRouter();
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "");
    const userStore: any = useuserStore();
    const { BookingObject } = storeToRefs(userStore);

    // console.log(userStore.date)

    const bookingRef = query(collection(db, "calender"));
    const snapshots = await getDocs(bookingRef);
    const mybookingsDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    //GLOBAL
    const filterBookings = mybookingsDocs.filter((f) => {
      if (f.slot1.userid === uid) {
        return f;
      }
      if (f.slot2.userid === uid) {
        return f;
      }
      if (f.slot3.userid === uid) {
        return f;
      }
      if (f.slot4.userid === uid) {
        return f;
      }
    });
    //GLOBAL
    const findBookings = filterBookings.map((e) => {
      if (e.slot1.userid === uid) {
        return e.slot1;
      }
      if (e.slot2.userid === uid) {
        return e.slot2;
      }
      if (e.slot3.userid === uid) {
        return e.slot3;
      }
      if (e.slot4.userid === uid) {
        return e.slot4;
      }
    });

    //FUNCTION HANDLE YOUR DATES
    const handleActiveBooking = (event: any) => {
      const editValue: string = ref(event.target.id).value;

      const bookingId = mybookingsDocs.filter((f) => {
        if (f.slot1.bookingid === editValue) {
          return f;
        }
        if (f.slot2.bookingid === editValue) {
          return f;
        }
        if (f.slot3.bookingid === editValue) {
          return f;
        }
        if (f.slot4.bookingid === editValue) {
          return f;
        }
      });
      const findBookings = bookingId.map((e) => {
        if (e.slot1.bookingid === editValue) {
          return e.slot1;
        }
        if (e.slot2.bookingid === editValue) {
          return e.slot2;
        }
        if (e.slot3.bookingid === editValue) {
          return e.slot3;
        }
        if (e.slot4.bookingid === editValue) {
          return e.slot4;
        }
      });
      //SEND findBookings-object to PINIA
      userStore.addBookingObj(findBookings[0]);
    };

    async function handleRemove() {
      const RemoveRef = doc(db, "calender", findBookings[0].date);

      if (findBookings[0].time === "07:00 till 11:00") {
        await updateDoc(RemoveRef, {
          slot1: {
            userid: null,
            bookingid: null,
            time: findBookings[0].time,
            date: findBookings[0].date,
          },
        });
      }
      if (findBookings[0].time === "11:00 till 15:00") {
        await updateDoc(RemoveRef, {
          slot2: {
            userid: null,
            bookingid: null,
            time: findBookings[0].time,
            date: findBookings[0].date,
          },
        });
      }
      if (findBookings[0].time === "15:00 till 19:00") {
        await updateDoc(RemoveRef, {
          slot3: {
            userid: null,
            bookingid: null,
            time: findBookings[0].time,
            date: findBookings[0].date,
          },
        });
      }
      if (findBookings[0].time === "19:00 till 23:00") {
        await updateDoc(RemoveRef, {
          slot4: {
            userid: null,
            bookingid: null,
            time: findBookings[0].time,
            date: findBookings[0].date,
          },
        });
      }

      router.push({ path: "/home" });
    }
    function handleEdit() {
      console.log(userStore.myObj.date);

      if (userStore.myObj.date) {
        router.push({ path: "/home" });
      }
    }

    return {
      findBookings,
      handleActiveBooking,
      handleRemove,
      handleEdit,

      BookingObject,
    };
  },
});
