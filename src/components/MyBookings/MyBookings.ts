import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "mybookings",

  async setup() {
    const db = getFirestore();
    const uid = sessionStorage.getItem("uid")
    
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const mybookingsDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      let john = mybookingsDocs.filter(f => f.slot1.id === uid)

  

      let find = john.filter((f) => {
        if (f.slot1.id === uid){
          console.log(f)
        }
      })
     
    
 



     
      let da = john.filter((f) => {
        if(f.slot1.id === uid){
          return (f.slot1.map(b => b.id));
        }
      }); 
      console.log(da)
  
   
  },
});
