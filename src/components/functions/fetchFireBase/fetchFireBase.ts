import { defineComponent, onMounted } from "vue";
import {
  collection,
  orderBy,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

export default defineComponent({
  name: "fetch-firebase",
  setup() {
    onMounted(() => {
      fetchData();
    });
    console.log("hej");
    async function fetchData() {
      const db = getFirestore();
      const dateRef = query(collection(db, "calender"), orderBy("timeID"));
      const snapshots = await getDocs(dateRef);
      const dateDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });
      console.log(dateDocs);
      console.log("dateDocs");
    }
  },
});
