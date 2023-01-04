
import { defineComponent, ref } from "vue";
import { format, addDays, startOfWeek, getDaysInMonth } from "date-fns";
import {doc, getFirestore, setDoc} from 'firebase/firestore'

export default defineComponent({
    name: 'Calender', 
    
     setup (){
        const db = getFirestore() 

    async function createDate() {
           
      const todayDate = ref(new Date()).value;
      const daysInMonth = getDaysInMonth(todayDate);
      const weekStartDate = startOfWeek(todayDate);
    
      for (let day = 0; day < daysInMonth; day++) {
        let object = ref(format(addDays(weekStartDate, day), "E d MMMM")).value

            await setDoc(doc(db, "calender", `${object}`), {

              date: format(addDays(weekStartDate, day), "E d MMMM"),
              timeID: Date.now(),
              slot1: {
                time: "07:00 till 11:00",
                id: null
              },
              slot2: {
                time: "11:00 till 15:00",
                id: null
              },
              slot3: {
                time: "15:00 till 19:00",
                id: null
              },
              slot4: {
                time: "19:00 till 23:00",
                id: null
              }  
          })      
        }
      }
    return {
      createDate
    }
}
   






})