<template>
  <div class="dm_bar">
    <div
      @click="bar(index, item)"
      :style="cur == index ? `background:${color}` : `background:${color1}`"
      class="dm_bar_list"
      v-for="(item, index) in dm_tab"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0,
      color: "#0058ce",
      color1: "#1D3466",
      text: "",
    };
  },
  props: {
    dm_tab: {
      type: Array,
    },
  },
  methods: {
    bar(index, msg) {
      this.cur = index;
      this.text = msg;
      this.$emit("dm_click", this.text);
    },
  },
  components: {},
  created() {},
  mounted() {
    this.text = this.dm_tab[0];
    this.$emit("dm_click", this.text);
  },
};
</script>
<style scoped>
.dm_bar {
  display: flex;
  border-radius: 4px;
  overflow: hidden;
}
.dm_bar_list {
  height: 3.2vh;
  padding: 0 0.6vw 0 0.6vw;
  color: #fff;
  line-height: 3.2vh;
  font-size: 0.7vw;
  margin-left: 0.1vw;
  cursor: pointer;
}
.dm_bar_list:nth-of-type(1) {
  margin-left: 0;
}
.dm_bar_list:last-of-type {
  border-radius: 0px 4px 4px 0px;
}
</style>