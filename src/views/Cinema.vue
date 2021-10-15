<template>
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
import { defineComponent, ref, onMounted, nextTick } from "vue";
import BetterScroll from "better-scroll";

import http from "@/utils/http";

export default defineComponent({
  setup() {
    const cinemaList = ref([]);
    const cinemaRef = ref(null);

    onMounted(() => {
      http({
        method: "GET",
        url: "/gateway?cityId=440300&ticketFlag=1&k=4268042",
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

    return {
      cinemaList,
      cinemaRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.cinema {
  // position: relative; // 修正better-scroll的滚动条位置, 解决出现拉到最底部的bug
  height: calc(100vh - 50px);
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
