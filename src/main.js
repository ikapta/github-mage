// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import '@/filters'
import Store from '@/service/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !Store.get('authInfo')) {
    next({ name: 'login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
