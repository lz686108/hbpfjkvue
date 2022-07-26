/*
 * @Author: your name
 * @Date: 2021-01-26 10:03:19
 * @LastEditTime: 2021-03-01 08:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coordination\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/index.vue'),
    redirect: '/sJie',
    children: [
      {
        path: '/list',
        name: 'list',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/list.vue'),
      }, {
        path: '/list1',
        name: 'list1',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/list1.vue'),
      }, {
        path: '/company',
        name: 'company',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/company.vue'),
      },
      {
        path: '/curFirst',
        name: 'curFirst',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/curFirst.vue'),
      },
      {
        path: '/sJie',
        name: 'sJie',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/sJie.vue'),
      },
      {
        path: '/sLU',
        name: 'sLU',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/sLU.vue'),
      },
      {
        path: '/lTie',
        name: 'lTie',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/lTie.vue'),
      },
      {
        path: '/lGang',
        name: 'lGang',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/lGang.vue'),
      },
      {
        path: '/tacie',
        name: 'tacie',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/tacie.vue'),
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/admin.vue'),
    redirect: '/table',
    children: [
      {
        path: '/table',
        name: 'table',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/table.vue'),
      },
      {
        path: '/Component_library',
        name: 'Component_library',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/Component_library.vue'),
      }, {
        path: '/test',
        name: 'test',
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/test.vue'),
      },
    ]
  },

]


const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  // hashbang: false,
  routes
})
// router.beforeEach((to, from, next) => {
//   // ...
//   // console.log(to);
//   if (sessionStorage.getItem('card') == null) {
//     let card = sessionStorage.getItem('card')
//     to.query.card = card
//   }

//   next()
// })

export default router
