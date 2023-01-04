/* eslint-disable vue/multi-word-component-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

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
        const dateValue = ref('')
        const timeValue = ref('')
        // hämta all data och sortera efter "Id" så att de ligger i ordning när du mappar ut
        const dateRef = query(collection(db, 'calender'), orderBy("timeID"))
        const snapshots = await getDocs(dateRef)
        const docs = snapshots.docs.map(doc => {
            const data = doc.data()
                data.id = doc.id
                return data
        })
        
        //this is what you send
        const data = docs

        // this function is when 
        async function submitBooking(){
            // new ref from firebase that runs every submit
            const bookingRef = query(collection(db, 'calender'))
            const snapshots = await getDocs(bookingRef)
            const bookingDocs = snapshots.docs.map(doc => {
            const data = doc.data()
                return data
        })
            // filter slot from firebase with date value from form
            const findSlot = bookingDocs.filter((f) => {
                if(f.date === dateValue.value){
                  return (f);
                }
              });
         
            //get ref from firebase from collection "calender"
            const updateRef = doc(db, "calender", dateValue.value);

            // push to firebase from slot1
            if (timeValue.value === '07:00 till 11:00'){
                const slot1 = findSlot.map(b => b.slot1.id)
                if (slot1[0] === null){
                    alert('Success')
                    await updateDoc(updateRef, {
                        slot1:{ id: "2gb3qe", time: timeValue.value}
                    })
                } else {
                    return alert('already booked')
                }
            }

            // push to firebase from slot2
            if (timeValue.value === '11:00 till 15:00'){
                const slot2 = findSlot.map(b => b.slot2.id)
                if (slot2[0] === null){
                    alert('Success')
                    await updateDoc(updateRef, {
                        slot2:{ id: "2gb3qe", time: timeValue.value}
                    })
                } else {
                    return alert('already booked')
                }
            }

            // push to firebase from slot3
            if (timeValue.value === '15:00 till 19:00'){
                const slot3 = findSlot.map(b => b.slot3.id)
                if (slot3[0] === null){
                    alert('Success')
                    await updateDoc(updateRef, {
                        slot3:{ id: "2gb3qe", time: timeValue.value}
                    })
                } else {
                    return alert('already booked')
                }
            }

            // push to firebase from slot4
            if (timeValue.value === '19:00 till 23:00'){
                const slot4 = findSlot.map(b => b.slot4.id)
                if (slot4[0] === null){
                    alert('Success')
                    await updateDoc(updateRef, {
                        slot4:{ id: "2gb3qe", time: timeValue.value}
                    })
                } else {
                    return alert('already booked')
                }
            }
            
            
        }
       
            
        

        


        
        return {
            
            submitBooking,
            data,
            timeValue,
            dateValue
        }
     },
})