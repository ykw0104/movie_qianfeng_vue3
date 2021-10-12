<template>
  <div class="nav-app">
    <tabbar class="tabbar-class"></tabbar>

    <router-view />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import Tabbar from "@/components/Tabbar";

export default defineComponent({
  name: "NavApp",

  components: {
    Tabbar,
  },

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
