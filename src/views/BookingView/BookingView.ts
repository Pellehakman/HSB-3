import Booking from "@/components/Booking/Booking.vue";
import Calender from "@/components/Calender/Calender.vue";
import { getAuth, signOut } from "firebase/auth";
import { defineComponent } from "vue";
import { useRouter } from 'vue-router'


export default defineComponent({
    name: 'LoginView', 
    
    setup(){
        const router = useRouter()
if (sessionStorage.getItem("user")){

} else{
    router.push({ path: '/login' })
}



        // const auth = getAuth();
        function SignOut(){
           
            sessionStorage.clear()
            router.push({ path: '/login' })
            
        }
        return{
            SignOut
        }

    }, 
    components : {

    Calender,
    Booking
    }






})