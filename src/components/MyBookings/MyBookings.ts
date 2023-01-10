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
    const dateValue = ref("");
    const activeBooking = ref();
    console.log(activeBooking);

    const bookingRef = query(collection(db, "calender"));
    const snapshots = await getDocs(bookingRef);
    const mybookingsDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });

    const a = Object(
      mybookingsDocs
        .map((f) => f["07:00 till 11:00"])
        .filter((v) => v.userid === uid)
    );
    const b = Object(
      mybookingsDocs
        .map((f) => f["11:00 till 15:00"])
        .filter((v) => v.userid === uid)
    );
    const c = Object(
      mybookingsDocs
        .map((f) => f["15:00 till 19:00"])
        .filter((v) => v.userid === uid)
    );
    const d = Object(
      mybookingsDocs
        .map((f) => f["19:00 till 23:00"])
        .filter((v) => v.userid === uid)
    );

    const findBookings = a.concat(b, c, d);

    const handleActiveBooking = (event: any) => {
      const editValue: string = ref(event.target.id).value;

      const findBookingID = Object(
        findBookings.filter((f: any) => f.bookingid === editValue)
      );

      activeBooking.value = findBookingID[0];

      // //SEND local scope findBookinId-object to PINIA
      userStore.addBookingObj(findBookingID[0]);
    };

    async function handleRemove() {
      console.log(activeBooking.value.date);
      const RemoveRef = doc(db, "calender", activeBooking.value.date);

      await updateDoc(RemoveRef, {
        [activeBooking.value.time]: {
          userid: null,
          bookingid: null,
          time: activeBooking.value.time,
          date: activeBooking.value.date,
        },
      });

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
