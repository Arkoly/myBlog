// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*Arkoly add window.VM*/
window.VM = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
// console.log('window.VM');
// window.VM.$router.push('/blog');
// console.log(window.VM.$router);
