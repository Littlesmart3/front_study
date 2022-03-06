import { createSSRApp } from "vue";
import App from "./App.vue";

// 引入全局样式
import '@/constants/scss/index.scss'

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
