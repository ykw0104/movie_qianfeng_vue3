<template>
  <div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="data in state.dataList"
        :key="data.filmId"
        @click="handleClick(data.filmId)"
      >
        <img class="np-img" :src="data.poster" alt="" />
        <h3>{{ data.name }}</h3>
        <p class="np-p">主演:{{ actorFilter(data.actors) }}</p>
        <p>{{ data.nation }} | {{ data.runtime }} 分钟</p>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import http from "@/utils/http";

export default defineComponent({
  setup() {
    const state = reactive({ dataList: [] });
    const current = ref(1); // 第几页数据
    const total = ref(0); // 数据总长度
    /* ----------------------------------------------------------------------------------------------------- */
    // van-list的参数

    const loading = ref(false); // 是否正在加载中, 到底会自动改成true
    const finished = ref(false); // 是否结束
    // 触发vant list的加载事件
    const onLoad = () => {
      // list长度和total相等, 说明数据已经全部请求完
      if (state.dataList.length === total.value) {
        finished.value = true;
        return;
      }

      // 1. 请求数据
      current.value++;
      http({
        method: "GET",
        url: `/gateway?cityId=110100&pageNum=${current.value}&pageSize=10&type=1&k=3894384`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        state.dataList = [...state.dataList, ...res.data.data.films];

        loading.value = false; // 加载完, 改成false
      });
    };
    /* ----------------------------------------------------------------------------------------------------- */
    const actorFilter = (actors) => {
      if (actors === undefined) return "暂时主演";
      return actors.map((item) => item.name).join(" "); // 拼接演员列表
    };
    /* ----------------------------------------------------------------------------------------------------- */
    http({
      method: "GET",
      url: "/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3894384",
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      state.dataList = res.data.data.films;
      total.value = res.data.data.total;
    });

    const router = useRouter();
    /* ----------------------------------------------------------------------------------------------------- */
    const handleClick = (id) => {
      router.push(`/detail/${id}`); // 跳转到详情页
    };

    return {
      state,
      loading,
      finished,

      actorFilter,
      handleClick,
      onLoad,
    };
  },
});
</script>

<style lang="scss" scoped>
.van-cell {
  .np-img {
    float: left;
    width: 100px;
  }

  > p.np-p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
