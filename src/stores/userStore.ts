import { defineStore } from "pinia";

// //Options
export const useUserStore = defineStore("user", {
  // collect string to myData
  state: () => ({
    editObject: [],
  }),

  //send this back to wherever
  getters: {
    BookingObject(state) {
      return state.editObject;
    },
  },

  // send editValue from click on "MyBookings" to state "myData"
  actions: {
    addBookingObj(findBookings: any) {
      this.editObject = findBookings;
      // console.log(findBookings);
    },
  },
});
