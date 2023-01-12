import { defineComponent, ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

export default defineComponent({
  name: "Register",

  setup() {
    const email = ref("");
    const password = ref("");

    const auth = getAuth();
    function RegisterSubmit() {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          router.push({ path: "/login" });
        })
        .catch((error: { code: any; message: any }) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

    return {
      email,
      password,
      RegisterSubmit,
    };
  },
  components: {},
});
