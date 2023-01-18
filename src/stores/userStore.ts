import { defineStore } from "pinia";

// //Options
export const useuserStore = defineStore("user", {
  // collect string to myData
  state: () => ({
    editObject: [],
    dateString: [],
    timeObj: [],
  }),

  //send this back to wherever
  getters: {
    BookingObject(state) {
      return state.editObject;
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
      this.editObject = findBookings;
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
