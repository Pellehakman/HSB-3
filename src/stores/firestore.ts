import { defineStore } from "pinia";
type fireType = {
  bookingid: string;
  date: string;
  time: string;
  userid: string;
  timeID: string;
};

// //Options
export const useFireStore = defineStore("firestore", {
  // collect string to myData
  state: () => ({
    fireArray: [] as fireType[],
  }),

  //send this back to wherever
  getters: {
    FireArray(state) {
      return state.fireArray;
    },
  },

  // send editValue from click on "MyBookings" to state "myData"
  actions: {
    addFireArray(fetchFireBase: any) {
      this.fireArray = fetchFireBase;
      // console.log(fetchFireBase);
    },
  },
});
