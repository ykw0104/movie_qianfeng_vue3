<template>
  <div>
    <ul>
      <li
        class="np-li"
        v-for="data in state.dataList"
        :key="data.filmId"
        @click="handleClick(data.filmId)"
      >
        <img class="np-img" :src="data.poster" alt="" />
        <h3>{{ data.name }}</h3>
        <p class="np-p">主演:{{ actorFilter(data.actors) }}</p>
        <p>{{ data.nation }} | {{ data.runtime }} 分钟</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import http from "@/utils/http";

export default defineComponent({
  setup() {
    const state = reactive({ dataList: [] });

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
    });

    const router = useRouter();
    /* ----------------------------------------------------------------------------------------------------- */
    const handleClick = (id) => {
      router.push(`/detail/${id}`); // 跳转到详情页
    };

    return {
      state,

      actorFilter,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.np-li {
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
