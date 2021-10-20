import { createStore } from "vuex";

import http from "@/utils/http";

export default createStore({
  state: {
    cityId: "310100",
    cityName: "上海",

    isTabbarShow: true, // tabbar的显示和隐藏

    cinemaList: [], // 影院信息
  },
  mutations: {
    // City.vue组件里更新城市信息
    updateCityInfo(state, payload) {
      state.cityName = payload.cityName;
      state.cityId = payload.cityId;
    },

    // Detail.vue组件里 tabbar的显示和隐藏
    updateIsTabbarShow(state, payload) {
      state.isTabbarShow = payload;
    },

    setCinemaList(state, cinemaList) {
      state.cinemaList = cinemaList;
    },

    clearCinemaList(state) {
      state.cinemaList = [];
    },
  },
  actions: {
    // Cinema.vue组件中的异步
    getCinemaList({ commit }, cityId) {
      return http({
        method: "GET",
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=4268042`,
        headers: { "X-Host": "mall.film-ticket.cinema.list" },
      }).then((res) => {
        commit("setCinemaList", res.data.data.cinemas);
      });
    },
  },
  modules: {},
});
