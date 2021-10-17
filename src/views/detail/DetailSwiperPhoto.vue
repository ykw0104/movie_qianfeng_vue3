<template>
  <swiper class="detail-swiper" :slides-per-view="2" :space-between="10">
    <template v-for="(photo, index) in photos" :key="index">
      <swiper-slide class="detail-swiper-slide" @click="handlePreview(index)">
        <div
          class="slide-div"
          :style="{ backgroundImage: 'url(' + photo + ')' }"
        ></div>
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { defineComponent } from "vue";

/* 引入swiper相关 */
import { Swiper, SwiperSlide } from "swiper/vue";
import { ImagePreview } from "vant";

import "swiper/swiper.scss";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    photos: Array,
  },
  setup(props) {
    const handlePreview = (index) => {
      // vant ImagePreview图片预览功能
      ImagePreview({
        images: props.photos,
        startPosition: index,
        loop: false,
        closeable: true,
        closeIconPosition: "top-left",
      });
    };
    return {
      handlePreview,
    };
  },
});
</script>

<style lang="scss" scoped>
.detail-swiper-slide {
  text-align: center;

  .slide-div {
    width: 100%;
    height: 12vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
