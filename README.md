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

- views\Cinema.vue 里引入了 better-scroll
- views\Cinema.vue 里引入了 vant 的 NavBar
- views\film\Nowplaying.vue 里引入了 vant 的 List -> 加载显示数据
- views\detail\DetailSwiperPhoto.vue 里引入了 vant ImagePreview -> 图片预览功能
- utils\http.js 的 axios 拦截器里引入了 vant toast -> 加载提示
- views\City.vue 里引入了 vant 的 IndexBar -> 城市索引列表
- views\Search.vue 里引入了 vant 的 Search

- 进入 detail 时 tabbar 的显示和隐藏是通过 vuex 来控制, 在 detail 组件里在 mounted 生命周期里设置隐藏, 在 beforeUnmount 生命周期里设置显示
