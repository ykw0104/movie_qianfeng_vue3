<template>
  <div class="nav-tabbar">
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
            <i class="iconfont">&#xe610;</i>
            <span>电影</span>
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
            <i class="iconfont">&#xe677;</i>
            <span>影院</span>
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
            <i class="iconfont">&#xe8a0;</i>
            <span>我的</span>
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
.nav-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 25px;
  text-align: center;
}

.tb-class {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  i {
    font-size: 20px;
  }

  span {
    font-size: 12px;
  }
}

.tb-active-class {
  color: red;
}
</style>
