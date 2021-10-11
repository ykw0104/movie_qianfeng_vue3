<template>
  <div>
    <button @click="handleClick">click</button>
    <slot name="btn"></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["myevent"],

  setup(props, { emit }) {
    const handleClick = () => {
      emit("myevent");
    };

    return { handleClick };
  },
});
</script>

<style lang="scss" scoped></style>
