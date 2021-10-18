<template>
  <!-- NavBar -->
  <van-nav-bar title="标题" @click-left="handleLeft">
    <!-- 左侧 -->
    <template #left>
      {{ cityName }} <van-icon name="arrow-down" color="#000" />
    </template>
    <!-- 右侧 -->
    <template #right>
      <van-icon name="search" size="22" color="#000" />
    </template>
  </van-nav-bar>
  <!-- 影院信息 -->
  <div class="cinema" ref="cinemaRef">
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
        <div>{{ data.name }}</div>
        <div class="address">{{ data.address }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, nextTick, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import BetterScroll from "better-scroll";

import http from "@/utils/http";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const cinemaList = ref([]);
    const cinemaRef = ref(null);

    const cityName = computed(() => store.state.cityName);
    const cityId = computed(() => store.state.cityId);

    onMounted(() => {
      http({
        method: "GET",
        url: `/gateway?cityId=${cityId.value}&ticketFlag=1&k=4268042`,
        headers: { "X-Host": "mall.film-ticket.cinema.list" },
      }).then((res) => {
        cinemaList.value = res.data.data.cinemas;

        nextTick(() => {
          new BetterScroll(cinemaRef.value, {
            scrollbar: {
              fade: true,
            },
          });
        });
      });
    });
    /* ----------------------------------------------------------------------------------------------------- */
    /* navbar的左侧点击事件 */
    const handleLeft = () => {
      router.push("/city");
    };

    return {
      cinemaList,
      cinemaRef,
      cityName,
      cityId,

      handleLeft,
    };
  },
});
</script>

<style lang="scss" scoped>
.van-nav-bar {
  height: 46px;
}

.cinema {
  position: relative; // 修正better-scroll的滚动条位置, 解决出现拉到最底部的bug
  height: calc(100vh - 96px); // 100vh - 底部tarbar高度 和 顶部navbar高度
  overflow: hidden;

  li {
    padding: 5px;

    .address {
      font-size: 12px;
      color: #ccc;
    }
  }
}
</style>
