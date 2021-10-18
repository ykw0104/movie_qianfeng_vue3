import { createStore } from "vuex";

export default createStore({
  state: {
    cityId: "310100",
    cityName: "上海",

    isTabbarShow: true,
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
  },
  actions: {},
  modules: {},
});
