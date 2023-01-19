import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
// import { format, getTime } from "date-fns";
import { useuserStore } from "../../stores/userStore";

export default defineComponent({
  name: "Menu-item",

  setup() {
    const router = useRouter();
    const userStore: any = useuserStore();
    const showMenu = ref(false);

    function hej() {
      console.log("hej");
      userStore.$reset();
    }
    function SignOut() {
      sessionStorage.clear();
      router.push({ path: "/login" });
    }

    return {
      showMenu,
      SignOut,
      userStore,
      hej,
    };
  },
});
