import Booking from "@/components/Booking/Booking/Booking.vue";
import Calender from '@/components/CreateCalender/Calender/Calender.vue'
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import User from "../User/User.vue";

export default defineComponent({
  name: "Home",

  setup() {
    const router = useRouter();
    if (JSON.parse(sessionStorage.getItem("uid") || "{}")) {
    } else {
      router.push({ path: "/login" });
    }

    function SignOut() {
      sessionStorage.clear();
      router.push({ path: "/login" });
    }
    return {
      SignOut,
    };
  },
  components: {
    Calender,
    Booking,
    User,
  },
});
