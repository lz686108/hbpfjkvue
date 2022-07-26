import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import XLSX from 'xlsx'
//echars
import * as echarts from 'echarts';
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
//注册 API地址
import api from "@/api/api";

Vue.prototype.$api = api;
// console.log(echarts);
// import { createLogger } from 'vuex';
//axios
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(XLSX)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
//引入自定义element样式
import './html/css/element.css'



// 自定义表格组件
import dm_table from '@/components/dm_table.vue'
Vue.component("dm_table", dm_table);//全局自定义组件
//时间控件组件  单月查询
import dm_time_month from '@/components/dm_time_month.vue'
Vue.component("dm_time_month", dm_time_month);
// 单日查询
import dm_time_day from '@/components/dm_time_day.vue'
Vue.component("dm_time_day", dm_time_day);
// 日区间查询
import dm_time_day_section from '@/components/dm_time_day_section.vue'
Vue.component("dm_time_day_section", dm_time_day_section);
//button样式组件
import dm_button from '@/components/dm_button.vue'
Vue.component("dm_button", dm_button);
//tab切换组件
import dm_tab from '@/components/dm_tab.vue'
Vue.component("dm_tab", dm_tab);
//表格标题图标
import dm_icon from '@/components/dm_icon.vue'
Vue.component("dm_icon", dm_icon);

Vue.filter('dataFormt', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d}`;
  // return `${ y } -${ m } -${ d } ${ hh }:${ mm }:${ ss }`
})


import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)

//监听页面 浏览器更换宽度 页面刷新自适应
// function onResize() {
//   location.reload();
// }
// window.addEventListener('resize', onResize);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
