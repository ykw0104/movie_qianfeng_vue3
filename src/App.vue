<template>
  <div class="nav-app">
    <tabbar class="tabbar-class"></tabbar>

    <router-view />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import Tabbar from "@/components/Tabbar";

import axios from "axios";

export default defineComponent({
  name: "NavApp",

  components: {
    Tabbar,
  },

  setup() {
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3894384",
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"16339133432575399829635073","bc":"110100"}`,
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res);
    });

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
