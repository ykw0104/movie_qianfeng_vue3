<template>
  <div class="fl-detail" v-if="filminfo">
    <div
      class="fl-img"
      :style="{ backgroundImage: 'url(' + filminfo.poster + ')' }"
    ></div>

    <h2>{{ filminfo.name }} - {{ filminfo.filmType.name }}</h2>
    <div>{{ filminfo.category }}</div>
    <div>{{ dateFilter(filminfo.premiereAt) }}</div>
    <div>{{ filminfo.nation }} | {{ filminfo.runtime }}分钟</div>

    <div>{{ filminfo.synopsis }}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import http from "@/utils/http";
import dayjs from "dayjs";

export default defineComponent({
  setup() {
    const filminfo = ref(null); // 保存电影信息

    const route = useRoute();
    /* ----------------------------------------------------------------------------------------------------- */
    http({
      method: "GET",
      url: `/gateway?filmId=${route.params.myid}&k=2010346`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      filminfo.value = res.data.data.film;
    });

    /* 处理时间戳 */
    const dateFilter = (premiereAt) => {
      return dayjs(premiereAt * 1000).format("YYYY-MM-DD");
    };
    /* --------------------------------------------------------------------------------------------------- */
    return {
      filminfo,

      dateFilter,
    };
  },
});
</script>

<style lang="scss" scoped>
.fl-img {
  height: 200px;
  background-position: center;
  background-size: cover;
}
</style>
