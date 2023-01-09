import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name: 'BookingDay',
    props:{
        todaysDate: String,
        date: String           
    },


    setup(props){
        console.log(props.todaysDate === props.date)
         const input = ref<HTMLElement | null >(null)

         function selectedDate(event:any){
            console.log('hejk', event.target.value )

         }
            const activeDate = computed(() => props.todaysDate === props.date)
        onMounted(() => {
            
            if(  props.todaysDate === props.date && input.value != null){
                console.log('hjek', input.value)
                input.value.scrollIntoView();
            }
            //path
            // if (props.todaysDate === props.date) {
            //   const DOMdate = document.querySelector(
            //     `div div.booking-container form div.box input[value="${userStore.myObj.date}"]`
            //   );
            //   DOMdate.checked = true
            //   DOMdate?.scrollIntoView({ behavior: "smooth", inline: "center" });
            // } 
          });

return { input, selectedDate, activeDate }
    }
})