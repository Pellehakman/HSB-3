import type { TimeType } from "@/components/models/models";
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
    addBookingObj(findBookings: any) {
      this.editObject = findBookings;
    },
  },
});
