<template>
  <!-- 头部 -->
  <div class="admin">
    <myheader :state="1"></myheader>
    <div style="display: flex">
      <div class="left">
        <div
          v-for="(item, index) in arr"
          :key="index"
          @click="chooseleft(index)"
          class="left_item"
          :style="
            ischoose == index ? 'background-color:#0058CE;color:#fff' : ''
          "
        >
          <img
            :class="
              index == 0 ? 'left_img' : index == 1 ? 'left_img1' : 'left_img2'
            "
            :src="ischoose == index ? item.whiteimg : item.img"
            alt=""
          />
          {{ item.name }}
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
        <div class="footer">责任工程师：XXX IT开发：XXX UI设计：XXX</div>
      </div>
    </div>
  </div>
</template>
<script>
import myheader from "@/components/header.vue";
// import mytable from "@/components/table.vue";
export default {
  data() {
    return {
      value1: "",
      arr: [
        {
          name: "计划录入",
          img: require("@/assets/2@2x.png"),
          whiteimg: require("@/assets/5@2x.png"),
        },
        {
          name: "vue组件库",
          img: require("@/assets/4@2x.png"),
          whiteimg: require("@/assets/52@2x.png"),
        },
        {
          name: "测试",
          img: require("@/assets/4@2x.png"),
          whiteimg: require("@/assets/52@2x.png"),
        },
      ],
      ischoose: 0,
    };
  },
  methods: {
    chooseleft(index) {
      this.ischoose = index;
      switch (this.ischoose) {
        case 0:
          this.$router.push("/table");
          break;
        case 1:
          this.$router.push("/Component_library");
          break;
        case 2:
          this.$router.push("/test");
        default:
          break;
      }
    },
  },
  components: {
    myheader,
  },
  created() {},
  mounted() {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.admin {
  background: #091022;
  width: 100vw;
  height: 100vh;
}

.left {
  background-color: #2a354b;
  width: 12vw;
  height: 91vh;
  color: #8cb0be;
  padding-top: 1vh;
}

.left_item {
  width: 100%;
  height: 5vh;
  /* background-color: #142752; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 0.9vw;
  cursor: pointer;
}

.left_img {
  width: 17.2px;
  height: 17.2px;
  margin-right: 1vw;
  margin-left: 1vw;
}

.left_img1 {
  width: 20px;
  height: 19px;
  margin-right: 1vw;
  margin-left: 1vw;
}

.left_img2 {
  width: 17px;
  height: 21px;
  margin-right: 1vw;
  margin-left: 1vw;
}

.right {
  width: 88vw;
  /* height: 92vh; */
  /* border: 1px solid red; */
}

.footer {
  width: 88vw;
  position: fixed;
  bottom: 0;
  line-height: 2.2vh;
  color: #fff;
  font-size: 0.7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
