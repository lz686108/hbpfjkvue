<template>
  <div class="lw_header">
    <div class="lw_header-1">
      <img src="../assets/logo.png" class="pic-1" alt="" />
      <div class="text">VUE前端组件库</div>
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
      <img v-if="state == 1" src="../assets/1@2x.png" class="pic-2" alt="" />
      <div class="chn">{{ chn }}</div>
      <div class="pho">
        <img :src="photoURL" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["state"],
  data() {
    return {
      card: "",
      chn: "",
      photoURL: "",
      name: ["烧结", "竖炉", "炼铁", "炼钢", "能源"],
      cur: 0,
    };
  },
  methods: {
    tab(e) {
      this.cur = e;
      console.log(this.cur);
      switch (this.cur) {
        case 0:
          this.$router.push("/list");
          break;
        default:
          break;
      }
    },
    admin() {
      const { href } = this.$router.resolve({
        path: "/admin",
      });
      window.open(href, "_blank");
    },
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
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
  mounted() {},
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
  