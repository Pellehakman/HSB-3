import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "_help",

  setup() {
    const active = ref(true);

    return { active };
  },
});
