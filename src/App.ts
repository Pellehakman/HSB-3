import { defineComponent } from "vue";
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu/Menu.vue";



export default defineComponent({
    name: "vue-app",
    components:{Menu},

    setup(){

        const showMenu = ref(false)


        const closeUpdate = (chosenDate: boolean) => {
            showMenu.value = chosenDate;
          };

        return{
            showMenu,
            closeUpdate
        }

    }

})