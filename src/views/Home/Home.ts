import Booking from "@/components/Booking/Booking/Booking.vue";
import Calender from "@/components/CreateCalender/Calender/Calender.vue";
import Meny from "@/components/Meny/Meny.vue";
import { useBookingStore } from "@/stores/bookingStore";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { storeToRefs } from "pinia";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import User from "../User/User.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  async setup() {
    const bookingStore: any = useBookingStore();
    const { bookingArray } = storeToRefs(bookingStore);

    console.log(bookingArray);

    const router = useRouter();
    if (JSON.parse(sessionStorage.getItem("uid") || "{}")) {
      /* empty */
    } else {
      router.push({ path: "/login" });
    }

    // const collectFireBase = query(
    //   collection(db, "calender"),
    //   orderBy("timeID")
    // );
    // const snapshots = await getDocs(collectFireBase);
    // const bookingArray = snapshots.docs.map((doc) => {
    //   const data = doc.data();
    //   return data;
    // });
    // bookingStore.addBookingArray(bookingArray);

    return {};
  },
  components: {
    Meny,
    Calender,
    Booking,
    User,
  },
});
