import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { defineComponent, ref } from "vue";


export default defineComponent({
    name: 'Register', 
    
    setup(){
      const db = getFirestore();

     async function hej () {
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const bookingDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });
      // filter slot from firebase with date value from form
      const findSlot = bookingDocs.filter((f) => {
       
      });
     }

return{
  hej
}
    }
    


})