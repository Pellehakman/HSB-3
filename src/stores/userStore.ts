import { defineStore } from 'pinia';
import { ref } from 'vue';


// //Options
export const useuserStore = defineStore('user', { 
       // collect string to myData
    state: () => ({
        myData: '',
        myObj: []
      }),
      //send this back to wherever 
    getters: {
        bookingIdStore(state) {
            return state.myData
          },
          bookingObjStore(state) {
            return state.myObj
          }
    },


    // send editValue from click on "MyBookings" to state "myData"
    actions: {
       addBookingId(editValue:string) {
        this.myData = editValue
        },
        addBookingObj(findBookings:any){
          this.myObj = findBookings
          // console.log(findBookings)
        }
    }
})

























// //Options
// export const useAppleStore = defineStore('apples', {
//     state: () => ({
//         apples: 0
//     }),

//     getters: {
//         displayValue: (state) => {
//             return `I have so many apples. Tomorrow i will eat all ${state.apples}`;
//         }
//     },
   
//     actions: {
//         increment() {
//             this.apples++
//         },
//     },
// });