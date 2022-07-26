import axios from "axios";
import Vue from "vue";
import { Message } from "element-ui";
// import { Loading } from "element-ui";
Vue.prototype.$message = Message;
// Vue.prototype.$Loading = Loading;

// let loadingInstance = ""; //定义加载器
let instance = axios.create({
  baseURL: "", //全局配置url请求地址
  timeout: 50000,
  // 配置请求头
  // headers: {
  //   shopid: JSON.parse(sessionStorage.getItem("userdata"))
  //     ? JSON.parse(sessionStorage.getItem("userdata")).id
  //     : [],
  //   token: JSON.parse(sessionStorage.getItem("userdata"))
  //     ? JSON.parse(sessionStorage.getItem("userdata")).token
  //     : [],
  // },
  // transformRequest: [
  // function (data = {}) {
  //   return qs.stringify(data, {
  //     arrayFormat: "brackets",
  //   });
  // },
  // ],
});

// axios请求之前要做的事情
instance.interceptors.request.use((config) => {
  // loadingInstance = Loading.service({
  //   fullscreen: true,
  // });
  return config;
});
// axios请求之后要做的事情
instance.interceptors.response.use(
  (response) => {
    // loadingInstance.close(); //关闭加载
    if (response.data) {

      // let msg = "";
      // 请求回来的数据 判断code是101（可变的）的返回值
      // if (response.data.status === -998 || response.data.status === -999) {
      //   // msg = response.data.msg || '请求失败';
      //   msg = "请重新登录";
      //   router.push({
      //     path: "/login",
      //   });
      // } else if (response.data.status === 9) {
      //   msg = "请先登录";
      // }
      // if (msg) {
      //   Message({
      //     showClose: true,
      //     message: msg,
      //   });
      //   return Promise.reject({
      //     status: response.data.status,
      //     msg,
      //   });
      // }
    }
    return response.data;
  },
  (error) => {
    Message({
      showClose: true,
      message: error.msg || "请求失败",
    });
    return Promise.reject(error);
  }
);
export default instance;
