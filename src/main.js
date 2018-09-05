// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify,
  { theme: { primary: "#03A9F4", secondary: "#2196F3", accent: "#9c27b0", error: "#f44336", warning: "#ffeb3b", info: "#2196f3", success: "#4caf50" },
  iconfont: 'fa' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
