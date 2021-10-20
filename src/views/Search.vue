<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const cinemaListVuex = computed(() => store.state.cinemaList);
    const cityIdVuex = computed(() => store.state.cityId);

    const value = ref("");

    if (cinemaListVuex.value.length === 0) {
      store.dispatch("getCinemaList", cityIdVuex.value);
    }

    console.log(cinemaListVuex);
    return {
      cinemaListVuex,
      value,
    };
  },
});
</script>

<style lang="scss" scoped></style>
