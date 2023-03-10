import type { TimeType } from "@/components/models/TimeType";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    editObject: [] as unknown as TimeType,
  }),

  getters: {
    BookingObject(state) {
      return state.editObject;
    },
  },

  actions: {
    addBookingObj(findBookings: TimeType) {
      this.editObject = findBookings;
    },
  },
});
