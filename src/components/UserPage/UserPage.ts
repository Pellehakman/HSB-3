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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserPage",

  async setup() {
    const router = useRouter();
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || "");
    const userStore: any = useuserStore();
    userStore.$reset();
    const bookingRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(bookingRef);
    const mybookingsDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });

    const handlePopup = ref("");
    const activeBooking = ref();
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(
      format(todayDate, "eeee d MMMM", { locale: sv })
    ).value;

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
    // console.log(displayBtn.value);
    function handleRemove() {
      handlePopup.value = "handleRemove";
    }

    async function submitRemove() {
      // console.log(activeBooking.value.date);
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
