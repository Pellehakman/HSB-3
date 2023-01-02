
import { defineComponent, ref } from "vue";
import { format, addDays, startOfWeek, getDaysInMonth } from "date-fns";
import {collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, where} from 'firebase/firestore'

export default defineComponent({
    name: 'Calender', 
    
    async setup(){
        const db = getFirestore() 


        
    //   HÄR SLUTADE DU IGÅR!
        // if (inputPlayer.length === 0) {
        //     setIfError('Please enter player name')
        // } else { 
        //     axios.get(`${URL}${player_url}`, {
        //         "headers": {
        //         "authorization": `Bearer ${TOKEN} `,
        //         "Accept": "application/vnd.api+json"
        //     }
        // }).then(
        //         (response:any) => {
        //         setDoc(doc(db, "players", "playerOne"), {

        //             playerName: (response.data.data[0].attributes.name),
        //             accountID: (response.data.data[0].id),
        //             date: Date.now()

        //           })
        //         }).catch(function (error) { if (error.response) 
        //             {setIfError(error.response.data.errors[0].detail)}
        //         })
        //     }
        


        
              const colRef = query(collection(db, 'calender'))
              const snapshots = await getDocs(colRef)
              const docs = snapshots.docs.map(doc => {
                const data = doc.data()
                      data.id = doc.id
                      return data
              })
              console.log(docs)
              
        
        




        async function createDate() {
      
            const daysMonth = [];
            const todayDate = ref(new Date()).value;
            const weekStartDate = startOfWeek(todayDate);
            const daysInMonth = getDaysInMonth(todayDate);
        
            for (let day = 0; day < daysInMonth; day++) {
              daysMonth.push(format(addDays(weekStartDate, day), "E d MMMM"));
            }
         
          
          }
        

    }, 
    components : {

    }






})