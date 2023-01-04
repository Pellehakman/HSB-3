
import { defineComponent, ref } from "vue";
import { format, addDays, startOfWeek, getDaysInMonth } from "date-fns";
import {collection, orderBy, updateDoc, doc, getDocs, getFirestore, query, setDoc} from 'firebase/firestore'

export default defineComponent({
    name: 'Booking', 
    
     async setup (){
        const db = getFirestore() 
        const todayDate = ref(new Date()).value;
        const thisDayDate = ref(format(todayDate, "E d MMMM")).value;
        const DateChoice = ref(thisDayDate)

        

        // hämta all data och sortera efter "Id" så att de ligger i ordning när du mappar ut
        const colRef = query(collection(db, 'calender'), orderBy("Id"))
        const snapshots = await getDocs(colRef)
        const docs = snapshots.docs.map(doc => {
            const data = doc.data()
                data.id = doc.id
                return data
        })
        
        //this is what you send
        let data = docs
        let dateData = docs

       
        const dateValue = ref('')
        const timeValue = ref('')

        
        //GÖR OM platsen i listan till nummer och +1
        async function findIndex(){
            let filtered = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].date == dateValue.value) {
                    filtered.push(parseFloat(data[i].id) +1);
                }
            }
            console.log(filtered) 
        }
        
        
      

        

        
        async function submitBooking(){
            console.log('your booking is', timeValue.value, dateValue.value)
            const updateRef = doc(db, "calender", "0");
            await updateDoc(updateRef, {
                slot3:{
                    id: "2gb3qe",
                    time: timeValue.value
                }
            });
            findIndex()
        }
       
            
        

        


        console.log(data)
        return {
            
            submitBooking,
            data,
            timeValue,
            dateValue
        }
     },
})