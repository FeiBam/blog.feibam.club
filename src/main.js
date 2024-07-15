import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from "./router";
import store from "./store";
import FontAwesomeIcon from "../src/forntaweome"
import VueI18n from 'vue-i18n';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '../src/assets/css/blog.css'
import '../src/assets/css/media.css'
import 'github-markdown-css/github-markdown.css';

import { setTitle } from './utils/SetTitle'
import i18n from './i18n/i18n.js'

//import './api/initData'
//import './Permission'


store.state.Blog.Lang = i18n.locale


Vue.config.productionTip = false

Vue.prototype.$throttle = function (func, timeFrame) {
  let lastTime = 0;
  return function () {
    const now = new Date();
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
}

Vue.prototype.$setTitle = setTitle
Vue.prototype.$T = Vue.prototype.$t

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(mavonEditor)
Vue.use(Vuex)
Vue.use(FontAwesomeIcon)
Vue.use(router)


new Vue({
  router:router,
  store,
  i18n:i18n,
  render: h => h(App),
}).$mount('#app')

