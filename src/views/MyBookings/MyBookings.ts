import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "mybookings",

  setup() {
    const db = getFirestore();

    async function hej() {
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const bookingDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      console.log("bookingDocs");
      // filter slot from firebase with date value from form
      const findSlot = bookingDocs.filter((f) => {});
    }
    onMounted(() => {
      hej();
    });
  },
});
