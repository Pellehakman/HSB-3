import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
// import { format, getTime } from "date-fns";

export default defineComponent({
  name: "Menu-item",

  setup() {
    const router = useRouter();
    const showMenu = ref(false);

    function SignOut() {
      sessionStorage.clear();
      router.push({ path: "/login" });
    }

    return {
      showMenu,
      SignOut,
    };
  },
});
