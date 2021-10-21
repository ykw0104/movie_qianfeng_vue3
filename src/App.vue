<template>
  <div class="nav-app">
    <!-- 底部的Tabbar -->
    <tabbar
      class="tabbar-class"
      v-show="$store.state.tabbar.isTabbarShow"
    ></tabbar>

    <!-- 内容区 -->
    <div class="main-app">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

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

.nav-app {
  .main-app {
    padding-bottom: 50px;
  }
}
</style>
