// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
Vue.use(VueRouter)

import SortTable from './components/SortTable.vue'

Vue.config.productionTip = false

const routes = [
  { path:'/',component: App},
  { path:'/sortTable',component: SortTable}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App },
  router,
  render: h => h(SortTable)
})
