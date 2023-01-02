import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'
export default defineComponent({
    name: 'Login', 

        setup(){
            const router = useRouter()
            let email = ref('')
            let password = ref('')
          
        const auth = getAuth();
            function NewUser(){ 
                signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  if (user){
                    console.log('lets fucking go')
                    console.log(user.email)
                    sessionStorage.setItem("user", JSON.stringify(user.email))
                    router.push({ path: '/booking' })
                  }
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode)
                  console.log(errorMessage) 
                });
        }
            
            return{
                email,
                password,
                NewUser
            }
    
        }, 
        components : {
    
        }
    
    
    
    
    
    
    })