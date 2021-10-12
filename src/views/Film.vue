<template>
  <div>
    <film-swiper></film-swiper>

    <!-- 正在热映/即将上映 -->
    <film-header class="film-header"></film-header>

    <router-view />
  </div>
</template>

<script>
import FilmHeader from "@/views/film/FilmHeader";
import FilmSwiper from "@/views/film/FilmSwiper";

import { defineComponent } from "vue";

export default defineComponent({
  components: { FilmHeader, FilmSwiper },
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
