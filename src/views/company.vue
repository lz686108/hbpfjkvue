<template>
  <!-- 头部 -->
  <div class="max">
    <input
      type="text"
      v-model="tagSearchModel['line_' + index]"
      v-for="(item, index) in 7"
      :key="index"
    />

    ad vdaf std m25 csr cri k

    <button @click="comapny()">计算</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagSearchModel: {
        line_0: 13.5,
        line_1: 1.35,
        line_2: 0.7,
        line_3: 92,
        line_4: 60,
        line_5: 30,
        line_6: 0.03,
      },
      stard: 435,
    };
  },
  methods: {
    comapny() {
      let str =
        this.stard +
        (((this.tagSearchModel.line_0 - 12.82) * 2) / 100) * this.stard +
        (this.tagSearchModel.line_1 - 1.21) * 5 +
        (((this.tagSearchModel.line_2 - 0.56) * 10 * 2) / 100) * this.stard -
        (((this.tagSearchModel.line_3 - 92.4) * 0.75) / 100) * this.stard -
        (((this.tagSearchModel.line_4 - 63.24) * 0.75) / 100) * this.stard +
        (((this.tagSearchModel.line_5 - 25.38) * 0.53) / 100) * this.stard +
        ((((this.tagSearchModel.line_6 - 0.03) / 0.05) * 0.5) / 100) *
          this.stard;
      console.log(str);
      // 435+
    },
  },
  components: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.max {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
}
input {
  margin-top: 1vh;
}
</style>

