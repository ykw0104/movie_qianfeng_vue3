import http from "@/utils/http";

const cinema = {
  namespaced: true,

  state: () => ({
    cinemaList: [], // 影院信息
  }),

  mutations: {
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
};

export default cinema;
