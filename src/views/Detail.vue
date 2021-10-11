<template>
  <div></div>
</template>

<script>
import { defineComponent, onMounted } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    /* ----------------------------------------------------------------------------------------------------- */
    onMounted(() => {
      console.log(route.params.myid);
    });
    /* --------------------------------------------------------------------------------------------------- */
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
