<template>
  <div>
    <el-row>
      <!-- 1. 电影 ------------------------------------------------------------------------- -->
      <el-col :span="8">
        <router-link
          to="/film"
          custom
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <div
            class="tb-class"
            :class="{ 'tb-active-class': isActive }"
            @click="navigate"
          >
            电影
          </div>
        </router-link>
      </el-col>
      <!-- 2. 影院 ------------------------------------------------------------------------- -->
      <el-col :span="8">
        <router-link
          to="/cinema"
          custom
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <div
            class="tb-class"
            :class="{ 'tb-active-class': isActive }"
            @click="navigate"
          >
            影院
          </div>
        </router-link>
      </el-col>
      <!-- 3. 我的------------------------------------------------------------------------- -->
      <el-col :span="8">
        <router-link
          to="/center"
          custom
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <div
            class="tb-class"
            :class="{ 'tb-active-class': isActive }"
            @click="navigate"
          >
            我的
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.tb-class {
  cursor: pointer;
  text-align: center;
}

.tb-active-class {
  color: red;
}
</style>
