<template>
  <div
    class="dm_button"
    :class="
      type == 'reset'
        ? 'dm_reset'
        : type == 'delete'
        ? 'dm_delete'
        : type == 'empty'
        ? 'dm_empty'
        : ''
    "
  >
    <i :class="icon"></i>
    {{ value }}
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
    },
    icon: {
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
.dm_button {
  display: inline-block;
  padding: 0 0.8vw 0 0.8vw;
  height: 3.2vh;
  background: #0058ce;
  color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
}
/* button样式 */
.dm_button {
  padding: 0 0.6vw 0 0.6vw;
  height: 3.2vh;
  background: #0058ce;
  color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
  cursor: pointer;
}
/* 重置 */
.dm_reset {
  background: #4c6991;
}
.dm_delete {
  background: #dd495c;
}
.dm_empty {
  background: #1e2d42;
}
.export {
  content: url("../assets/icon/daochu@2x.png");
  width: 0.6vw;
  height: 0.6vw;
  padding-right: 0.2vw;
}
.update {
  content: url("../assets/icon/xiugai@2x.png");
  width: 0.6vw;
  height: 0.6vw;
  padding-right: 0.2vw;
}
.switch {
  content: url("../assets/icon/qiehuan@2x.png");
  width: 0.6vw;
  height: 0.6vw;
  padding-right: 0.2vw;
}
.newly {
  content: url("../assets/icon/xinjian@2x.png");
  width: 0.6vw;
  height: 0.6vw;
  padding-right: 0.2vw;
}
.delete {
  content: url("../assets/icon/shanchu@2x.png");
  width: 0.6vw;
  height: 0.6vw;
  padding-right: 0.2vw;
}
.empty {
  content: url("../assets/icon/qingkong@2x.png");
  width: 0.6vw;
  height: 0.6vw;
  padding-right: 0.2vw;
}
</style>
