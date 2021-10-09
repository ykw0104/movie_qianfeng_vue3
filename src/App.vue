<template>
  <div class="nav">
    <navbar></navbar>
    <sidebar></sidebar>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default defineComponent({
  name: "NavApp",
  components: { Navbar, Sidebar },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
