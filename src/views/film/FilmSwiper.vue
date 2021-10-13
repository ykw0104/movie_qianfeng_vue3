<template>
  <div>
    <swiper
      class="film-swiper"
      :slides-per-view="1"
      :autoplay="swiper_options.autoplay"
      :loop="swiper_options.loop"
      :speed="swiper_options.speed"
      :pagination="swiper_options.pagination"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="film-swiper-slide">Slide 1</swiper-slide>
      <swiper-slide class="film-swiper-slide">Slide 2</swiper-slide>
      <swiper-slide class="film-swiper-slide">Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

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

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      swiper_options,
      onSwiper,
      onSlideChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.film-swiper {
  height: 300px;
  background-color: #ccc;
}
</style>
