import Vue from 'vue'
import App from './App.vue'
import useElement from './element-views'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'
import store from './store'
useElement();
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
