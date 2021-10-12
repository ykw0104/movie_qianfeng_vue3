<template>
  <div>
    <ul class="fh-ul">
      <router-link
        to="/film/nowplaying"
        custom
        v-slot="{ route, isExactActive, isActive, href, navigate }"
      >
        <li class="fh-li" :class="{ 'active-li': isActive }" @click="navigate">
          正在热映
        </li>
      </router-link>
      <router-link
        to="/film/comingsoon"
        custom
        v-slot="{ route, isExactActive, isActive, href, navigate }"
      >
        <li class="fh-li" :class="{ 'active-li': isActive }" @click="navigate">
          即将上映
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.fh-ul {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;

  margin-bottom: 5px;

  .fh-li {
    flex: 1;
    border-bottom: 2px solid gray;
  }

  .active-li {
    position: relative;
    color: red;
    border-bottom: 2px solid red;
  }
}
</style>
