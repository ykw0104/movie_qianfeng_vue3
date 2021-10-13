<template>
  <swiper
    class="film-swiper"
    :slides-per-view="1"
    :autoplay="swiper_options.autoplay"
    :loop="swiper_options.loop"
    :speed="swiper_options.speed"
    :pagination="swiper_options.pagination"
  >
    <template v-for="(img, index) in imgList" :key="index">
      <swiper-slide>
        <img class="slide-img" :src="img" alt="" />
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

/* 引入swiper相关 */
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/a11y/a11y.scss";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "FilmSwiper",
  setup() {
    /* swiper参数设置 */
    const swiper_options = reactive({
      // 自动播放
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true, // 循环
      speed: 500,
      // 分页按钮
      pagination: {
        clickable: true,
      },
    });

    /* 录播图的图片,这里写死了 */
    const imgList = ref([
      require("../../img/s1.jpg"),
      require("../../img/s2.jpg"),
      require("../../img/s3.jpg"),
    ]);

    /* ----------------------------------------------------------------------------------------------------- */
    return {
      swiper_options,
      imgList,
    };
  },
});
</script>
<style lang="scss" scoped>
.film-swiper {
  .slide-img {
    width: 100%;
  }
}
</style>
