import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入设置好的router对象
import router from './router';
//引入UI插件
import ElementUI from 'element-ui';
//引入使用样式
import 'element-ui/lib/theme-chalk/index.css';
//vue对象使用ui插件
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')