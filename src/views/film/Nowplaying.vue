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
        <p>{{ data.actors }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  setup() {
    const state = reactive({ dataList: [] });
    /* ----------------------------------------------------------------------------------------------------- */
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3894384",
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"16339133432575399829635073","bc":"110100"}`,
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

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
