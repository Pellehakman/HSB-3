import {
  collection,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { defineComponent, ref } from "vue";
import { useuserStore } from "../../stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserPage",

  async setup() {
    const handlePopup = ref("");
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(
      format(todayDate, "eeee d MMMM", { locale: sv })
    ).value;
    const router = useRouter();
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "");
    const userStore: any = useuserStore();
    const { BookingObject } = storeToRefs(userStore);
    const activeBooking = ref();
    userStore.$reset();
    const bookingRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(bookingRef);
    const mybookingsDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    // hitta alla bokningar med din UID
    //denna kan du använda från separat komponent liksom från booking
    const a = mybookingsDocs
      .map((f) => f["07:00 till 11:00"])
      .filter((v) => v.userid === uid);

    const b = mybookingsDocs
      .map((f) => f["11:00 till 15:00"])
      .filter((v) => v.userid === uid);

    const c = mybookingsDocs
      .map((f) => f["15:00 till 19:00"])
      .filter((v) => v.userid === uid);

    const d = mybookingsDocs
      .map((f) => f["19:00 till 23:00"])
      .filter((v) => v.userid === uid);

    const findBookings = a.concat(b, c, d);
    console.log(findBookings);

    //
    const handleActiveBooking = (event: any) => {
      const editValue: string = ref(event.target.id).value;

      const findBookingID = Object(
        findBookings.filter((f: any) => f.bookingid === editValue)
      );
      //updating activeBooking REF
      activeBooking.value = findBookingID[0];

      // //SEND local scope findBookinId-object to PINIA
      userStore.addBookingObj(findBookingID[0]);
    };
    function handleRemove() {
      handlePopup.value = "handleRemove";
    }
    async function submitRemove() {
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

      userStore.$reset();
      window.location.reload();
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
      BookingObject,
      thisDayDate,
      handlePopup,
      activeBooking,
    };
  },
  components: {},
});
