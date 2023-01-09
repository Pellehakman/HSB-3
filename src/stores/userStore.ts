import { defineStore } from "pinia";
import { ref } from "vue";

// //Options
export const useuserStore = defineStore("user", {
  // collect string to myData
  state: () => ({
    
    myObj: []
  }),
  //send this back to wherever
  getters: {
    
    BookingObject(state) {
      return state.myObj;
    },
  },

  // send editValue from click on "MyBookings" to state "myData"
  actions: {
    
    addBookingObj(findBookings: any) {
      this.myObj = findBookings;
      console.log(findBookings)
    },
  },
});



