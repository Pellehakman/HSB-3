import { id } from "date-fns/locale";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "mybookings",

  async setup() {
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || '{}');
    
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const mybookingsDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      let filterBookings = mybookingsDocs.filter((f) => {
        if (f.slot1.userid === uid){
          return f
        }
        if (f.slot2.userid === uid){
          return f
        }
        if (f.slot3.userid === uid){
          return f
        }
        if (f.slot4.userid === uid){
          return f
        }
         
        
      })

      // console.log(filterBookings)

      let findBookings = filterBookings.map((e) => {
        if (e.slot1.userid === uid){
          return (e.slot1)
        }
        else if (e.slot2.userid === uid){
          return (e.slot2)
        }
        else if (e.slot3.userid === uid){
          return (e.slot3)
        }
        else if (e.slot4.userid === uid){
          return (e.slot4)
        }
        else return
       
      })
        

     
    console.log(findBookings)


    
   
  return{
    findBookings
  }
   
  },
});
