import { defineStore } from "pinia";

// //Options
export const useuserStore = defineStore("user", {
  // collect string to myData
  state: () => ({
    deleteObj: [],
  }),
  //send this back to wherever
  getters: {
    BookingObject(state) {
      return state.deleteObj;
    },
  },

  // send editValue from click on "MyBookings" to state "myData"
  actions: {
    addBookingObj(findBookings: any) {
      this.deleteObj = findBookings;
      console.log(findBookings);
    },
  },
});
