import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "mybookings",
  data(){
    let hej = ref()
  },

  async setup() {
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || '');

      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const mybookingsDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      let filterBookings = mybookingsDocs.filter((f) => {
        if (f.slot1.userid === uid){ return f }
        if (f.slot2.userid === uid){ return f }
        if (f.slot3.userid === uid){ return f }
        if (f.slot4.userid === uid){ return f }
      })

      let findBookings = filterBookings.map((e) => {
        if (e.slot1.userid === uid){ return e.slot1 }
        if (e.slot2.userid === uid){ return e.slot2 }
        if (e.slot3.userid === uid){ return e.slot3 }
        if (e.slot4.userid === uid){ return e.slot4 }
      })
      



      function handleActiveBooking(event:any) {
        let editValue = ref(event.target.id).value
        console.log(editValue)
        

       


      }





      function handleRemove({editValue}:any){
        console.log('hora', editValue)

      }
      function handleEdit(){
        console.log('edit')

      }
        
  return{
    findBookings,
    handleActiveBooking,
    handleRemove,
    handleEdit,
    
  
      }
    }
});
