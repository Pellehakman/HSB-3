import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
// import { format, getTime } from "date-fns";
import { useUserStore } from "../../stores/userStore";

export default defineComponent({
  name: "Menu-item",

  setup() {
    const router = useRouter();
    const userStore: any = useUserStore();
    const showMenu = ref(false);

    function SignOut() {
      sessionStorage.clear();
      router.push({ path: "/login" });
    }

    return {
      showMenu,
      SignOut,
      userStore,
    };
  },
});
