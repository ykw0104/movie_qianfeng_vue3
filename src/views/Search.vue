<template>
  <div>
    <van-search
      v-model="searchVal"
      show-action
      placeholder="请输入搜索关键词"
      @cancel="handleCancel"
    />
  </div>

  <van-list>
    <van-cell v-for="data in cinemaListComputed" :key="data.cinemaId">
      <div>{{ data.name }}</div>
      <div style="font-size:12px;color:#ccc;">{{ data.address }}</div>
    </van-cell>
  </van-list>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const cinemaListVuex = computed(() => store.state.cinemaList);
    const cityIdVuex = computed(() => store.state.cityId);

    const searchVal = ref("");

    const cinemaListComputed = computed({
      get: () => {
        if (searchVal.value === "") {
          return null;
        }
        return cinemaListVuex.value.filter(
          // 过滤搜索结果
          (item) =>
            item.name.toUpperCase().includes(searchVal.value.toUpperCase()) ||
            item.address.toUpperCase().includes(searchVal.value.toUpperCase())
        );
      },
      set: (val) => {},
    });

    if (cinemaListVuex.value.length === 0) {
      store.dispatch("getCinemaList", cityIdVuex.value);
    }
    /* ----------------------------------------------------------------------------------------------------- */
    const handleCancel = () => {
      router.replace("/cinema");
    };
    return {
      cinemaListVuex,
      cinemaListComputed,
      searchVal,

      handleCancel,
    };
  },
});
</script>

<style lang="scss" scoped></style>
