<template>
  <div class="flex">
    <i class="icon" :class="icon"></i>
    <span>{{ value }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods: {},
  components: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.flex {
  min-width: 3vw;
  height: 1vh;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.7vw;
}
.icon {
  width: 0.8vw;
  height: 0.8vw;
  padding-right: 0.2vw;
}
.flex span {
  line-height: 1vh;
}
.genzong {
  content: url("../assets/table_icon/genzong@2x.png");
}
.yujing {
  content: url("../assets/table_icon/yujing@2x.png");
}
.mingxi {
  content: url("../assets/table_icon/mingxi@2x.png");
}
.qushi {
  content: url("../assets/table_icon/qushi@2x.png");
}
.kanban {
  content: url("../assets/table_icon/kanban@2x.png");
}
.wendu {
  content: url("../assets/table_icon/wendu@2x.png");
}
.canshu {
  content: url("../assets/table_icon/canshu@2x.png");
}
.chengfen {
  content: url("../assets/table_icon/chengfen@2x.png");
}
.rili {
  content: url("../assets/table_icon/rili@2x.png");
}
.mulu {
  content: url("../assets/table_icon/mulu@2x.png");
}
.nengyuan {
  content: url("../assets/table_icon/nengyuan@2x.png");
}
.bingtu {
  content: url("../assets/table_icon/bingtu@2x.png");
}
.tongji {
  content: url("../assets/table_icon/tongji@2x.png");
}
.shijian {
  content: url("../assets/table_icon/shijian@2x.png");
}
.biaoge {
  content: url("../assets/table_icon/biaoge@2x.png");
}
.hezuo {
  content: url("../assets/table_icon/hezuo@2x.png");
}
.cengji {
  content: url("../assets/table_icon/cengji@2x.png");
}
.fenlei {
  content: url("../assets/table_icon/fenlei@2x.png");
}
.fenzhi {
  content: url("../assets/table_icon/fenzhi@2x.png");
}
.shangpin {
  content: url("../assets/table_icon/shangpin@2x.png");
}
.shuju {
  content: url("../assets/table_icon/shuju@2x.png");
}
.chengben {
  content: url("../assets/table_icon/chengben@2x.png");
}
.fenji {
  content: url("../assets/table_icon/fenji@2x.png");
}
.zhuzhuangtu {
  content: url("../assets/table_icon/zhuzhuangtu@2x.png");
}
.tianqiyupan {
  content: url("../assets/table_icon/tianqiyupan@2x.png");
}
.zhibiao {
  content: url("../assets/table_icon/zhibiao@2x.png");
}
.zhouqi {
  content: url("../assets/table_icon/zhouqi@2x.png");
}
.tupian {
  content: url("../assets/table_icon/tupian@2x.png");
}
.baojing {
  content: url("../assets/table_icon/baojing@2x.png");
}
.jiankong {
  content: url("../assets/table_icon/jiankong@2x.png");
}
.yunxing {
  content: url("../assets/table_icon/yunxing@2x.png");
}
.lishi {
  content: url("../assets/table_icon/lishi@2x.png");
}
.chuangan {
  content: url("../assets/table_icon/chuangan@2x.png");
}
.guanlian {
  content: url("../assets/table_icon/guanlian@2x.png");
}
.biaozhun {
  content: url("../assets/table_icon/biaozhun@2x.png");
}
</style>
