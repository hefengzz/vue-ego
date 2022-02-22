import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router';
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 样式初始化
import '../src/assets/css/reset.css'
import '../src/assets/css/border.css'
import '../src/assets/css/globel.css'



Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
