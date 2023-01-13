import Booking from "@/components/Booking/Booking/Booking.vue";
import Calender from "@/components/CreateCalender/Calender/Calender.vue";
import Meny from "@/components/Meny/Meny.vue";
import { defineComponent, ref } from "vue";
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
   
    function SignOut() {
      sessionStorage.clear();
      router.push({ path: "/login" });
    }
    return {
      SignOut,
      
  
    };
  },
  components: {
    Meny,
    Calender,
    Booking,
    User,
    
  },
});
