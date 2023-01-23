import { defineComponent } from "vue";
import {
  collection,
  orderBy,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { useFireStore } from "@/stores/firestore";

export default defineComponent({
  name: "fetch-firebase",
  async setup() {
    const firestore = useFireStore();

    const db = getFirestore();
    const dateRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(dateRef);
    const fetchFireBase = snapshots.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    firestore.addFireArray(fetchFireBase);
  },
});

