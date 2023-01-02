import { defineComponent, ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
    name: 'Register', 
    
    setup(){
        let email = ref('')
        let password = ref('')
      
    const auth = getAuth();
        function NewUser(){ 
        createUserWithEmailAndPassword(auth, email.value, password.value)

        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error: { code: any; message: any; }) => {
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