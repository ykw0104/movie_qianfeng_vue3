import { createApp } from "vue";

/* element-plus组件库 */
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

/* vant组件库 */
import Vant from "vant";
import "vant/lib/index.css";

import "../css/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(ElementPlus);
app.use(Vant);
app.use(store);
app.use(router);
app.mount("#app");
