<template>
  <div class="fl-detail" v-if="filminfo">
    <detail-header v-top :title="filminfo.name"></detail-header>

    <div
      class="fl-img"
      :style="{ backgroundImage: 'url(' + filminfo.poster + ')' }"
    ></div>

    <h2>{{ filminfo.name }} - {{ filminfo.filmType.name }}</h2>
    <div>{{ filminfo.category }}</div>
    <div>{{ dateFilter(filminfo.premiereAt) }}</div>
    <div>{{ filminfo.nation }} | {{ filminfo.runtime }}分钟</div>

    <div :class="{ 'fl-synopsis': isHidden }">
      {{ filminfo.synopsis }}
    </div>
    <div class="fl-arrow" @click="isHidden = !isHidden">
      <el-icon>
        <arrow-down v-if="isHidden" />
        <arrow-up v-else />
      </el-icon>
    </div>

    <h3>演职人员</h3>
    <detail-swiper :actors="filminfo.actors"> </detail-swiper>
    <h3>剧照</h3>
    <detail-swiper-photo :photos="filminfo.photos"></detail-swiper-photo>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
} from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import http from "@/utils/http";
import dayjs from "dayjs";
import { ArrowDown, ArrowUp } from "@element-plus/icons";
import DetailSwiper from "@/views/detail/DetailSwiper";
import DetailSwiperPhoto from "@/views/detail/DetailSwiperPhoto";
import DetailHeader from "@/views/detail/DetailHeader";

export default defineComponent({
  components: {
    ArrowDown,
    ArrowUp,
    DetailSwiper,
    DetailSwiperPhoto,
    DetailHeader,
  },
  directives: {
    top: {
      // 指令的定义
      mounted(el) {
        el.style.opacity = 0;
        el.style.transition = "all 0.5s";

        window.onscroll = () => {
          if (
            (document.documentElement.scrollTop || document.body.scrollTop) > 50
          ) {
            el.style.opacity = 1;
          } else {
            el.style.opacity = 0;
          }
        };
      },

      unmounted() {
        window.onscroll = null; // 防止跳转到其他页面时,还在监听onscroll
      },
    },
  },
  setup() {
    const filminfo = ref(null); // 保存电影信息
    const isHidden = ref(true);

    const route = useRoute();
    const store = useStore();

    onMounted(() => {
      // 进入detail页面时隐藏tabbar
      store.commit("tabbar/updateIsTabbarShow", false);
    });

    onBeforeUnmount(() => {
      // 离开detail页面时显示tabbar
      store.commit("tabbar/updateIsTabbarShow", true);
    });
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
      isHidden,

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

.fl-synopsis {
  overflow: hidden;
  height: 42px;
}

.fl-arrow {
  text-align: center;
  background-color: #eee;
}
</style>
