import { defineComponent, ref } from "vue";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  orderBy,
} from "firebase/firestore";

export default defineComponent({
  name: "removeDay",
  setup() {
    const db = getFirestore();

    async function removeDay() {
      const removeRef = query(collection(db, "calender"), orderBy("timeID"));
      const snapshots = await getDocs(removeRef);
      const removeDayDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      const existingDays = removeDayDocs.map((f) => f.date);
      if (existingDays.includes(removeDayDocs)) {
        console.log("already a day with same date");
        return;
      } else {
        console.log("lets add day");
      }
    }

    return {
      removeDay,
    };
  },
});
