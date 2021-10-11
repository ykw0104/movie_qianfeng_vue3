<template>
  <div class="nav-app">
    <router-view />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavApp",
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
li {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
</style>
