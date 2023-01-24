import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "_help",

  setup() {
    const active = ref(true);
    const helpText = ref("");

    if (active.value === true) {
      helpText.value = "Behöver du hjälp?";
    }
    if (active.value === false) {
      helpText.value = "Lets fix ";
    }

    return { active, helpText };
  },
});
