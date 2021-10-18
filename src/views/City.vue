<template>
  <!-- 城市列表 -->
  <van-index-bar
    v-if="cityList.length > 0"
    :index-list="indexList"
    :sticky="false"
    @select="handleSelect"
  >
    <template v-for="data in cityList" :key="data.type">
      <van-index-anchor :index="data.type">{{ data.type }}</van-index-anchor>
      <template v-for="(item, index) in data.list" :key="index">
        <van-cell
          :title="item.name"
          @click="handleChangePage(item.name, item.cityId)"
        />
      </template>
    </template>
  </van-index-bar>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Toast } from "vant";

import Http from "@/utils/http";

export default defineComponent({
  setup() {
    const cityList = ref([]); // 城市列表
    const indexList = ref([]); // vant索引值的索引列表

    const router = useRouter();
    const store = useStore();

    /* ----------------------------------------------------------------------------------------------------- */
    Http({
      method: "GET",
      url: "/gateway?k=8279183",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      cityList.value = handleCityData(res.data.data.cities);
      indexList.value = cityList.value.map((item) => item.type);
    });
    /* ----------------------------------------------------------------------------------------------------- */
    /* 后端的cities数据转成前端需要的格式 */
    const handleCityData = (cities) => {
      // 1. 创建26个A-Z的字母
      const letterArr = [];
      for (let code = 65; code < 91; code++) {
        letterArr.push(String.fromCharCode(code));
      }

      // 2. 处理数据
      const newCityList = []; // 前端需要的格式的城市列表
      letterArr.forEach((letter) => {
        const list = cities.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === letter
        );

        // A-Z首字母含有的城市的list
        if (list.length > 0) {
          newCityList.push({
            type: letter,
            list: list,
          });
        }
      });
      return newCityList;
    };

    /* 处理索引栏的选择事件 */
    const handleSelect = (index) => {
      Toast(index);
    };

    const handleChangePage = (cityName, cityId) => {
      // 更新城市信息
      store.commit("updateCityInfo", {
        cityName,
        cityId,
      });
      router.back();
    };
    return {
      cityList,
      indexList,

      handleSelect,
      handleChangePage,
    };
  },
});
</script>

<style lang="scss" scoped></style>
