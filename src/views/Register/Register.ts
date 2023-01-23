import { defineComponent, ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

export default defineComponent({
  name: "_register",

  setup() {
    const email = ref("");
    const password = ref("");
    const pswErrors = ref("");
    const emlErrors = ref("");
    const displayErrors = ref("");

    const auth = getAuth();
    function RegisterSubmit() {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          router.push({ path: "/login" });
        })
        .catch((error: { code: any; message: any }) => {
          // const errorCode = error.code;
          // console.log(errorCode);
          if (error.code === "auth/wrong-password") {
            pswErrors.value = "Ditt lösenord är felaktigt.";
          }
          if (error.code === "auth/internal-error") {
            emlErrors.value = "Din epost-adress är felaktig.";
          }
          if (error.code === "auth/invalid-email") {
            emlErrors.value = "Ange korrekt epost-adress";
          }
          if (error.code === "auth/missing-email") {
            emlErrors.value = "Ange epost-adress";
          }
        });
    }

    return {
      email,
      password,
      displayErrors,
      RegisterSubmit,
    };
  },
  components: {},
});
