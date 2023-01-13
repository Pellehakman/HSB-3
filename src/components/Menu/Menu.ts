import { defineComponent, ref } from "vue";
// import { format, getTime } from "date-fns";

export default defineComponent({
  name: "Menu-item",

  setup(props, { emit }) {

    function closeMenu() {
      emit("onCloseUpdate", false);
    }
 





    return{
      closeMenu
      
    
    }
  },
});
