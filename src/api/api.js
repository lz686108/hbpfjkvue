import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$axios = axios;
import {Message} from "element-ui";

Vue.prototype.$message = Message;

export default {
    async get_api(url, data) {
        await axios(url, {
            params: data,
        }).then((res) => {
            if (res.data.code != 200) {
                Message({
                    showClose: true,
                    message: "请求失败",
                });
            }
            data = res.data
        });
        return data
    },
    async post_api(url, data) {
        let obj
        obj = {
            id: 123
        }
        let param = new URLSearchParams();
        param.append("data", JSON.stringify(obj));
        await axios
            .post(url, param)
            .then((res) => {
                if (res.data.code != 200) {
                    Message({
                        showClose: true,
                        message: "请求失败",
                    });
                }
                data = res.data.obj
            });
        return data
    },
    //区间
    async zhongtai_api(obj) {
        let data;
        await axios.post("http://e.ai:8083/data-governance/sensor/batch/sv/seconds/all", obj)
            .then((res) => {
                data = res.data.data[0]["datas"]
            })
        return data;
    },
    //瞬时值
    async zhongtai_apisx(obj) {
        let data;
        await axios.post("http://e.ai:8083/data-governance/sensor/batch/latest", obj)
            .then((res) => {
                data = res.data.data[0]
            })

        return data;
    },


    //添加万能接口
    async dm_add(obj, dm_sql) {
        let param = new URLSearchParams();
        param.append("data", JSON.stringify(obj));
        param.append("dm_sql", JSON.stringify(dm_sql));
        await axios
            .post("http://10.6.1.110/API/eid/dm_maintain.php", param)
            .then((res) => {
                if (res.data.code == 200) {
                    Message({
                        type: 'success',
                        message: res.data.msg,
                    });
                } else {
                    Message({
                        type: 'error',
                        message: res.data.msg,
                    });
                }
            });
    },
    async dm_del(id, parms) {
        await axios("http://10.6.1.110/API/eid/dm_del.php", {
            params: {
                id: id,
                dm_sql: parms
            }
        }).then((res) => {
            if (res.data.code == 200) {
                Message({
                    type: 'success',
                    message: res.data.msg,
                });
            } else {
                Message({
                    type: 'error',
                    message: res.data.msg,
                });
            }
        });
    },
    timeFormat(str, msg) {
        // yyyy-MM-dd HH:mm:ss
        let dt = new Date(str);
        // 获取年月日
        let y = dt.getFullYear();
        let m = (dt.getMonth() + 1).toString().padStart(2, "0");
        let d = dt.getDate().toString().padStart(2, "0");
        let h = dt.getHours().toString().padStart(2, "0");
        let i = dt.getMinutes().toString().padStart(2, "0");
        let s = dt.getSeconds().toString().padStart(2, "0");
        if (msg == 'month') {
            return `${y}-${m}`;
        } else if (msg == 'day') {
            return `${y}-${m}-${d}`;
        } else if (msg == 'getMinutes') {
            return `${y}-${m}-${d} ${h}:${i}`;
        } else if (msg == 'getSeconds') {
            return `${y}-${m}-${d} ${h}:${i}:${s}`;

        }
    },

};