<template>
  <div>
    <ul>
      <li v-for="data in dataList" :key="data.id" @click="handleClick(data.id)">
        {{ data.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const dataList = ref([
      { id: 1, title: "夺冠" },
      { id: 2, title: "姜子牙" },
      { id: 3, title: "花木兰" },
    ]);

    const router = useRouter();
    /* ----------------------------------------------------------------------------------------------------- */
    const handleClick = (id) => {
      router.push(`/detail/${id}`); // 跳转到详情页
    };

    return {
      dataList,

      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped></style>
