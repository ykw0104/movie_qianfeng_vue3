const tabbar = {
  namespaced: true,

  state: () => ({
    isTabbarShow: true, // tabbar的显示和隐藏
  }),

  mutations: {
    // Detail.vue组件里 tabbar的显示和隐藏
    updateIsTabbarShow(state, payload) {
      state.isTabbarShow = payload;
    },
  },
};

export default tabbar;
