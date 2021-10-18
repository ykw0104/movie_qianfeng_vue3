import { createStore } from "vuex";

export default createStore({
  state: {
    cityId: "310100",
    cityName: "上海",
  },
  mutations: {
    // City.vue组件里更新城市信息
    updateCityInfo(state, payload) {
      state.cityName = payload.cityName;
      state.cityId = payload.cityId;
    },
  },
  actions: {},
  modules: {},
});
