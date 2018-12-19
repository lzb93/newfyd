// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import i18n from './i18n/i18n';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css.css'
import animate from 'animate.css' 
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(animate);
Vue.prototype.$ajax= axios
/* eslint-disable no-new */


// const i18n = new VueI18n({
//   locale: 'zh-cn',
//   messages: {
//     'en-us': LangENUS,
//     'zh-cn': LangZHCN
//   }
// })

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
