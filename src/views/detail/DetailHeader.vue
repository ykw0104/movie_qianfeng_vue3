<template>
  <div class="detail-header">{{ title }}</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title"],
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.detail-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
}
</style>
