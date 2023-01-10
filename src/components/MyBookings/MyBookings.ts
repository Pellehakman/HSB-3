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

    const bookingRef = query(collection(db, "calender"));
    const snapshots = await getDocs(bookingRef);
    const mybookingsDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
 

    
    const filterBookings = mybookingsDocs.filter((f) => {
     return Object.values(f).find(slot => slot.useruid === uid)
      
      // if (f["07:00 till 11:00"].userid === uid) {
      //   return f;
      // }
      // if (f["11:00 till 15:00"].userid === uid) {
      //   return f;
      // }
      // if (f["15:00 till 19:00"].userid === uid) {
      //   return f;
      // }
      // if (f["19:00 till 23:00"].userid === uid) {
      //   return f;
      // }
    });

console.log(filterBookings)

    //GLOBAL
    const findBookings = filterBookings.map((e) => {
      if (e["07:00 till 11:00"].userid === uid) {
        return e["07:00 till 11:00"];
      }
      if (e["11:00 till 15:00"].userid === uid) {
        return e["11:00 till 15:00"];
      }
      if (e["15:00 till 19:00"].userid === uid) {
        return e["15:00 till 19:00"];
      }
      if (e["19:00 till 23:00"].userid === uid) {
        return e["19:00 till 23:00"];
      }
    });

    //FUNCTION HANDLE YOUR DATES
    const handleActiveBooking = (event: any) => {
      const editValue: string = ref(event.target.id).value;
      console.log(editValue)
      const bookingId = mybookingsDocs.filter((f) => {
        if (f["07:00 till 11:00"].bookingid === editValue) {
          return f;
        }
        if (f["11:00 till 15:00"].bookingid === editValue) {
          return f;
        }
        if (f["15:00 till 19:00"].bookingid === editValue) {
          return f;
        }
        if (f["19:00 till 23:00"].bookingid === editValue) {
          return f;
        }
      });
     
      const findBookinId = bookingId.map((e) => {
        if (e["07:00 till 11:00"].bookingid === editValue) {
          return e["07:00 till 11:00"];
        }
        if (e["11:00 till 15:00"].bookingid === editValue) {
          return e["11:00 till 15:00"];
        }
        if (e["15:00 till 19:00"].bookingid === editValue) {
          return e["15:00 till 19:00"];
        }
        if (e["19:00 till 23:00"].bookingid === editValue) {
          return e["19:00 till 23:00"];
        }
      });
     
      //SEND local scope findBookinId-object to PINIA
      userStore.addBookingObj(findBookinId[0]);
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
