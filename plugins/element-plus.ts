import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/common/var.scss";
import '@/assets/styles/global.scss';

export default defineNuxtPlugin((app) => {
  app.vueApp.use(ElementPlus);
});
