import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "mybookings",

  setup() {
    const db = getFirestore();
    const uid = sessionStorage.getItem("uid")
    async function hej() {
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const mybookingsDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      let john = mybookingsDocs.filter(f => f.slot1.id === uid)

      
      console.log(john)
        
    
    }
    onMounted(() => {
      hej();
      
    });
   
  },
});
