import Booking from "@/components/Booking/Booking/Booking.vue";
import Calender from "@/components/CreateCalender/Calender/Calender.vue";
import fetchFireBase from "@/components/functions/fetchFireBase/fetchFireBase";
import Meny from "@/components/Meny/Meny.vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import User from "../User/User.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  setup() {
    const router = useRouter();
    if (JSON.parse(sessionStorage.getItem("uid") || "{}")) {
      /* empty */
    } else {
      router.push({ path: "/login" });
    }

    return {};
  },
  components: {
    Booking,
    fetchFireBase,
    Meny,
    Calender,
    User,
  },
});
