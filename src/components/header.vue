<template>
  <div class="lw_header">
    <div class="lw_header-1">
      <img src="../assets/logo.png" class="pic-1" alt=""/>
      <div class="text">环保排放监控</div>
      <div class="tab" v-if="state != 1">
        <div
            class="tab-1 border-1"
            v-for="(item, index) in name"
            :key="index"
            @click="tab(index)"
            :class="[cur == index ? 'border-1' : 'border-2']"
        >
          {{ item }}
          <div class="border" v-if="cur == index"></div>
        </div>
      </div>
    </div>

    <div class="lw_header-1">
      <img
          v-if="state != 1"
          @click="admin()"
          src="../assets/set.png"
          class="pic-2"
          alt=""
      />
      <img v-if="state == 1" src="../assets/1@2x.png" class="pic-2" alt=""/>
      <div class="chn">{{ chn }}</div>
      <div class="pho">
        <img :src="photoURL" alt=""/>
      </div>
    </div>
    <!--    弹窗-->
    <div v-if="tanc" class="likedls">
      <div class="oleacti">
        <div class="eatie">
          <div>标准维护</div>
          <div @click="tanc=false">❌</div>
        </div>
        <div style="width: 34.5vw;display: flex;justify-content: space-between">
          <table class="table" style="width: 17vw;margin-left: 0.5vw;margin-top: 1vh">
            <thead>
            <tr>
              <td>参数名称</td>
              <td>标准</td>
            </tr>
            </thead>
            <tbody style="height: 75.8vh">
            <tr v-for="(item, index) in tiuice.slice(0,(tiuice.length+1)/2)" :key="index">
              <td>{{ item.pfcs }}</td>
              <td><input
                  type="text"
                  class="inputindex"
                  v-model="item.bz"
                  style="margin-left: 0.3vw; cursor: pointer"/>
              </td>
            </tr>
            </tbody>
          </table>
          <table class="table" style="width: 17vw;margin-top: 1vh">
            <thead>
            <tr>
              <td>参数名称</td>
              <td>标准</td>
            </tr>
            </thead>
            <tbody style="height: 75.8vh">
            <tr v-for="(item, index) in tiuice.slice((tiuice.length+1)/2,tiuice.length)" :key="index">
              <td>{{ item.pfcs }}</td>
              <td><input
                  type="text"
                  class="inputindex"
                  v-model="item.bz"
                  style="margin-left: 0.3vw; cursor: pointer"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div style="display: flex;justify-content: flex-end;width: 35vw;margin-top: 1vh;">
          <div class="cir1a" style="margin-left: 0.5vw;" @click="insrtals()">
            保存
          </div>
          <div class="cir1a" @click="tanc=false" style="margin-left: 0.5vw;margin-right: 0.5vw;background-color: #666666;">
            取消
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";

export default {
  props: ["state"],
  data() {
    return {
      card: "",
      chn: "",
      photoURL: "",
      name: ["烧结", "竖炉", "炼铁", "炼钢", "能源"],
      cur: 0,
      //弹窗
      tanc: false,
      tiuice: [],
    };
  },
  methods: {
    insrtals() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/hbbz/insertua",
        params: {
          jdrl: JSON.stringify(this.tiuice)
        },
      }).then((res) => {
        this.tiuice = res.data
        this.tanc=false
        this.$message("保存成功")
      });

    },
    tab(e) {
      this.cur = e;
      console.log(this.cur);
      switch (this.cur) {
        case 0:
          this.$router.push("/sJie");
          break;
        case 1:
          this.$router.push("/sLU");
          break;
        case 2:
          this.$router.push("/lTie");
          break;
        case 3:
          this.$router.push("/lGang");
          break;
        case 4:
          this.$router.push("/curFirst");
          break;
        default:
          break;
      }
    },
    admin() {
      this.tanc = true;
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/hbbz/selectHbbz",
        params: {},
      }).then((res) => {
        this.tiuice = res.data
      });
    },
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },
    select(text) {
      var token = this.getQueryString("token");
      // var card=this.getQueryString("card");
      var permission = text; //权限名
      this.$axios('http://so.newsteel.ai:8888/shiro/web/authc/isPermitted?permission=env:paifa:view&token=' + token).then((res) => {
        res
      })
    },
  },
  created() {
    this.token = this.getQueryString("token");
    this.card = this.getQueryString("card");
    sessionStorage.setItem("card", this.card);
    if (this.card == null) {
      window.location.href =
          "http://10.6.1.129/login/index.html?url=" + window.location.href;
    }
    sessionStorage.setItem("card", this.card);
    this.card = sessionStorage.getItem("card");
    this.$axios("http://10.6.1.198:8888/shiro/web/authc/address", {
      params: {
        user: this.card,
      },
    }).then((res) => {
      this.chn = res.data.obj.chn;
      this.photoURL = res.data.obj.photoURL;
      sessionStorage.setItem("chn", this.chn);
    });
  },
  mounted() {
    this.select("env:paifa:view");
  },
};
</script>
<style>
.el-avatar > img {
  width: 1vw;
  /* width: 100% !important; */
}
</style>

<style scoped>
.pho {
  width: 1.8vw;
  height: 1.8vw;
  border-radius: 50%;
  margin-right: 1vw;
  overflow: hidden;
}

.pho img {
  width: 100%;
  margin-top: -0.5vh;
}

.lw_header {
  width: 100vw;
  height: 6vh;
  background: #151e2d;
  display: flex;
  justify-content: space-between;
}

.lw_header-1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.lw_header-1 .pic-1 {
  width: 0.8vw;
  height: 3.5vh;
  margin-left: 1vw;
}

.lw_header-1 .pic-2 {
  width: 1vw;
  height: 2vh;
  margin-right: 1vw;
  cursor: pointer;
}

.text {
  color: #c7d0d7;
  font-size: 1.1vw;
  padding-left: 1vw;
  font-weight: bold;
}

.photo {
  margin-right: 2vw;
}

.chn {
  color: #a0bad6;
  font-size: 1vw;
  padding-right: 1vw;
}

.tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  margin-left: 6.5vw;
  position: relative;
}

.tab-1 {
  width: 3vw;
  margin-right: 2vw;
  cursor: pointer;
  height: 6vh;
  line-height: 6vh;
  position: relative;
  font-size: 0.8vw;
  display: flex;
  justify-content: center;
}

.border {
  position: absolute;
  bottom: 0;
  width: 1.5vw;
  height: 3px;
  background: #e0b564;
}

.border-1 {
  color: #e0b564;
}

.border-2 {
  color: #718294;
}
</style>
<style scoped>
.cir1a {
  background-color: #2f60d2;
  width: 4vw;
  height: 3.5vh;
  border-radius: 0.2vw;
  font-size: 0.5vw;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.likedls {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.oleacti {
  width: 35vw;
  height: 92vh;
  background-color: #2A354B;
}

.eatie {
  display: flex;
  justify-content: space-between;
  width: 34vw;
  margin-left: 0.5vw;
  margin-top: 1vh;
  color: #ffffff;
  font-size: 1vw;
}

.inputindex {
  background-color: #1d3466;
  color: #fff;
  border: none;
  width: 4vw;
  height: 2.5vh;
  margin-left: 0.1vw;
}
</style>
<style scoped>
.table,
thead,
tbody tr {
  width: 100%;
  /* 表格自动布局 */
  display: table;
  table-layout: fixed;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody tr:hover > td {
  background-color: #284269;
}

tr:hover {
  background-color: #284269;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody {
  /* 表格滚轮 */
  height: 33.5vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #465e72;
  width: 99.8%;
  scrollbar-width: none;
  border-collapse: collapse;
}

.table tbody tr td {
  background-color: #1f2e43;
  font-size: 0.6vw;
  height: 3vh;
  border-right: #2A354B 2px solid;
}

.table thead tr td {
  height: 2.7vh;
  font-size: 0.7vw;
  font-weight: normal;
  color: #f8faff;
  border-right: #2A354B 2px solid;
}

.table tbody tr {
  color: #fff;
}

.table td {
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
}

.table thead tr td {
  background-color: #142a53;
  border-bottom: solid 0.1vw #2b354a;
  text-align: center;
}

.table {
  margin-left: 0.2vw;
}

.table thead {
  width: 99.8%;
  color: #fff;
  border-collapse: collapse;
}

/* 取消表格的滚轮 */
::-webkit-scrollbar-thumb {
  background-color: #000 !important;
  border-radius: 3vw;
}

/* 滑轮背景色 */
/* 滚动条的头尾的颜色 */
::-webkit-scrollbar-button {
  background-color: none;
}

/* 滚动条的头尾的颜色 */
/* 滚动条的背景色 */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
  background-color: none !important;
  display: none;
}
</style>
  