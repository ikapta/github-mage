import Vue from 'vue'
import Router from 'vue-router'

import home from './pages/home'
import account from './pages/account'
import batch from './pages/batch.manage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: {
        template: '<h1><center>Hello World</center></h1>'
      },
      beforeEnter: (to, from, next) => {
        setTimeout(() => {
          next({ name: 'home' })
        }, 3000)
      }
    },
    ...home,
    ...account,
    ...batch
  ]
})
