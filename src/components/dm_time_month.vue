<template>
  <div class="dm_header">
    <div class="dm_header1">
      <img src="../assets/time.png" alt="" />
      <div class="xg_time_control">
        <el-date-picker
          v-model="time"
          type="month"
          placeholder="选择月"
          format="yyyy-MM"
          value-format="yyyy-MM"
          prefix-icon="none"
          clear-icon="none"
        >
        </el-date-picker>
      </div>
      <!-- 2022-05-08 -->
      <!-- <div class="new_text1">{{ time }}</div> -->
      <div class="dm_day dm_day1" @click="day(1)">前一月</div>
      <div class="dm_day" @click="day(2)">当 月</div>
      <div class="dm_day" @click="day(3)">后一月</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  props: {
    dmshow: {
      type: Boolean,
    },
  },
  methods: {
    // 前一天  当天 后一天方法
    day(e) {
      if (e == 1) {
        this.time = this.$api.timeFormat(
          new Date(this.time) * 1 - 86400 * 1000 * 31,
          "month"
        );
      }
      if (e == 2) {
        this.time = this.$api.timeFormat(new Date() * 1, "month");
      }
      if (e == 3) {
        this.time = this.$api.timeFormat(
          new Date(this.time) * 1 + 86400 * 1000 * 31,
          "month"
        );
      }
      this.$emit("dmtime", this.time);
    },
  },
  components: {},
  created() {},
  mounted() {
    this.time = this.$api.timeFormat(new Date() * 1, "month");
    this.$emit("dmtime", this.time);
  },
};
</script>
<style scoped>
.new_text {
  position: absolute;
  top: 0vh;
}
.new_text1 {
  position: absolute;
  left: 1.8vw;
  width: 3vw;
  height: 3.2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.6vw;
  z-index: 0;
}
.dm_header {
  display: flex;
  justify-content: space-between;
}
.dm_header1 {
  background: #1d3466;
  border-radius: 4px 4px 4px 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.2vh;
  padding-right: 0.2vw;
  position: relative;
}
.dm_header1 img {
  width: 0.9vw;
  height: 0.9vw;
  margin-left: 0.5vw;
}
.dm_day {
  min-width: 3vw;
  color: #fff;
  text-align: center;
  line-height: 2.5vh;
  background: #0058ce;
  border-radius: 3px;
  margin-left: 0.5vw;
  font-size: 0.7vw;
  z-index: 999;
  cursor: pointer;
}
.dm_day1 {
  /* margin-left: 3.5vw; */
}

.xg_time_control {
  margin-left: 0.5vw;
}
::v-deep .xg_time_control .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  height: 3.2vh;
  width: 3vw;
  padding: 0;
  font-size: 0.7vw;
  border: none;
}
::v-deep .xg_time_control .el-input--prefix .el-input__inner {
  padding: 0;
  height: 3.2vh;
  background: #1d3466;
  border: none;
  color: #809dd2;
  padding-top: 0.24vh;
}
</style>