import repos from './repos'
import menu from './batch-menu'
import { notifications } from '../components'

export default [

  {
    path: '/batch',
    component: menu,
    children: [
      {
        path: 'repos',
        name: 'repos',
        meta: { title: '批量管理项目' },
        component: repos
      },
      {
        path: 'notifications',
        name: 'notifications',
        meta: { title: '批量管理-消息列表' },
        component: notifications
      }
    ]
  }
]
