import { createApp } from 'vue';
import App from './App.vue';

import * as VueRouter from "vue-router"
import routes from './router/routes'

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

// 路由
const router=VueRouter.createRouter({
  history:VueRouter.createWebHashHistory(),
  routes,
})
// 状态管理
const pinia=createPinia();
pinia.use(piniaPluginPersistedstate)


createApp(App).use(Antd).use(router).use(pinia).mount('#app')
