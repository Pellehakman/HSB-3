import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Login",

  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const auth = getAuth();
    const displayErrors = ref("");
    function LoginSubmit() {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            // console.log(user.email);
            // console.log(user.uid);
            sessionStorage.setItem("uid", JSON.stringify(user.uid));
            router.push({ path: "/home" });
          }
        })
        .catch((error) => {
          // const errorCode = error.code;
          // console.log(errorCode);
          if (error.code === "auth/wrong-password") {
            displayErrors.value = "Felaktigt användarnamn eller lösenord.";
          }
          if (error.code === "auth/user-not-found") {
            displayErrors.value = "Felaktigt användarnamn eller lösenord.";
          }
          if (error.code === "auth/invalid-email") {
            displayErrors.value = "Felaktigt användarnamn eller lösenord.";
          }
          if (error.code === "auth/internal-error") {
            return;
          }
        });
    }

    return {
      email,
      password,
      LoginSubmit,
      displayErrors,
    };
  },
  components: {},
});
