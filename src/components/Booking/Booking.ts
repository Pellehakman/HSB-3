
import { defineComponent, ref } from "vue";
import { format, addDays, startOfWeek, getDaysInMonth } from "date-fns";
import {collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, where} from 'firebase/firestore'

export default defineComponent({
    name: 'Booking', 
    
     async setup (){
        const db = getFirestore() 


        

  const colRef = query(collection(db, 'calender'))
  const snapshots = await getDocs(colRef)
  const docs = snapshots.docs.map(doc => {
    const data = doc.data()
          data.id = doc.id
          return data
  })
  
  let data = docs[0].collectionDates
  

        console.log(data)


        
              
              
        
        return {
            data
        }


     },
    components : {

    }






})