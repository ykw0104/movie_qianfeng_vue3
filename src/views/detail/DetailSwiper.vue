<template>
  <swiper class="detail-swiper" :slides-per-view="3" :space-between="40">
    <template v-for="(data, index) in actors" :key="index">
      <swiper-slide class="detail-swiper-slide">
        <img class="slide-img" :src="data.avatarAddress" alt="" />
        <div>{{ data.name }}</div>
        <div>{{ data.role }}</div>
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { defineComponent } from "vue";

/* 引入swiper相关 */
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["actors"],
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.detail-swiper-slide {
  text-align: center;

  .slide-img {
    width: 100%;
  }
}
</style>
