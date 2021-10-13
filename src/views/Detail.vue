<template>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import http from "@/utils/http";

export default defineComponent({
  setup() {
    const route = useRoute();
    /* ----------------------------------------------------------------------------------------------------- */
    http({
      method: "GET",
      url: `/gateway?filmId=${route.params.myid}&k=2010346`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res);
    });

    /* --------------------------------------------------------------------------------------------------- */
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
