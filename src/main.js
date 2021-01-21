import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

//elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//axios请求
import axios from 'axios'
window.axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')
