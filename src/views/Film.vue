<template>
  <div>
    <div style="height:100px;background-color:yellow">鲁班</div>
    <film-header class="film-header"></film-header>

    <router-view />
  </div>
</template>

<script>
import FilmHeader from "@/views/film/FilmHeader";

import { defineComponent } from "vue";

export default defineComponent({
  components: { FilmHeader },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.film-header {
  position: sticky;
  top: 0px;
  background-color: #fff;
}
</style>
