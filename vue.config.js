module.exports = {
  devServer: {
    proxy: {
      // 设置猫眼网的跨域问
      "/ajax": {
        target: "https://m.maoyan.com",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
