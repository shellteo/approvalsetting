import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home'
import startApproval from '@/pages/StartApproval'
import approvalList from '@/pages/ApprovalList'
import approvalSetting from '@/pages/ApprovalSetting'
import approvalDetail from '@/pages/ApprovalDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/startApproval',
      name: 'startApproval',
      component: startApproval
    },
    {
      path: '/approvalList',
      name: 'approvalList',
      component: approvalList
    },
    {
      path: '/approvalSetting',
      name: 'approvalSetting',
      component: approvalSetting
    },
    {
      path: '/approvalDetail',
      name: 'approvalDetail',
      component: approvalDetail
    }
  ]
})
