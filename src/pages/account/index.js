import login from './login'

export default [
  {
    path: '/login',
    name: 'login',
    meta: { title: 'Github 登录' },
    component: login
  }
]
