import { defineStore } from "pinia";

// //Options
export const useuserStore = defineStore("user", {
  // collect string to myData
  state: () => ({
    deleteObj: [],
    dateString: [],
    timeObj: [],
  }),

  //send this back to wherever
  getters: {
    BookingObject(state) {
      return state.deleteObj;
    },
    DateString(state) {
      return state.dateString;
    },
    TimeObj(state) {
      return state.timeObj;
    },
  },

  // send editValue from click on "MyBookings" to state "myData"
  actions: {
    addBookingObj(findBookings: any) {
      this.deleteObj = findBookings;
      // console.log(findBookings);
    },
    addTimeObj(findBookings: any) {
      this.dateString = findBookings;
      // console.log(findBookings);
    },
    addDateString(findBookings: any) {
      this.timeObj = findBookings;
      // console.log(findBookings);
    },
  },
});
