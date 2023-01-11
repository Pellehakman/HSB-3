import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name: 'BookingSlot',
    props:{
        // todaysDate: String,
        // date: String           
    },
    emits: ['onTimeUpdate'],

    setup(props, {emit}){
        // console.log(props.todaysDate === props.date)
         const input = ref<HTMLElement | null >(null)
        //  const activeDate = computed(() => props.todaysDate === props.date)
      
            function timeUpdate(event:any) {
                emit('onTimeUpdate', event.target.value);
                }

            onMounted(() => {
            // if(  props.todaysDate === props.date && input.value != null){
            //     // console.log('hjek', input.value)
            //     input.value.scrollIntoView();
            // }
          
          });

return { input, timeUpdate }
    }
})