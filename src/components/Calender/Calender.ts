
import { defineComponent, ref } from "vue";
import { format, addDays, startOfWeek, getDaysInMonth } from "date-fns";
import {collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, where} from 'firebase/firestore'

export default defineComponent({
    name: 'Calender', 
    
     setup (){
        const db = getFirestore() 


        
// async function getDates() {
//   const colRef = query(collection(db, 'calender'))
//   const snapshots = await getDocs(colRef)
//   const docs = snapshots.docs.map(doc => {
//     const data = doc.data()
//           data.id = doc.id
//           return data
//   })
//   console.log(docs)
  
// }
        


        
              
              
        
        




           function createDate() {
            
            const daysMonth:any = [];
            let collectionDates = daysMonth
      

            
            
            
            const todayDate = ref(new Date()).value;
            const weekStartDate = startOfWeek(todayDate);
            const daysInMonth = getDaysInMonth(todayDate);
           
            for (let day = 0; day < daysInMonth; day++) {
              let object = {
                  date: format(addDays(weekStartDate, day), "E d MMMM"),
                  slots: {
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
                  }
                }
              
              
            
                  daysMonth.push(object)
              
            }
          

        
            setDoc(doc(db, "calender", "dates"), {

             collectionDates
             

          })
          getDates()
          }
        return {
          createDate,
          
          
        }

    }, 
    components : {

    }






})