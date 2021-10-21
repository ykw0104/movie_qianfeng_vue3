import { createStore } from "vuex";

import city from "./module/CityModule";
import tabbar from "./module/TabbarModule";
import cinema from "./module/CinemaModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    city,
    tabbar,
    cinema,
  },
});
