# movie_qianfeng

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

1. views/Cinema.vue 里引入了 better-scroll
2. views\film\Nowplaying.vue 里引入了 vant 的 List -> 加载显示数据
3. views\detail\DetailSwiperPhoto.vue 里引入了 vant ImagePreview -> 图片预览功能
4. utils\http.js 的 axios 拦截器里引入了 vant toast 加载提示
