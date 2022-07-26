<template>
  <div class="max"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    echarts_list() {
      var chartDom = document.getElementById("echarts_1");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        color: [
          "#E3A453",
          "#008CCB",
          "#E68E7E",
          "#99CA74",
          "#8E7FD6",
          "#008CCB",
        ],
        barGap: 0, //去掉间隔
        grid: {
          top: 40,
          bottom: 20,
          left: 40,
          right: 20,
        },
        legend: {
          data: [
            "计划量",
            "实际量",
            "在途趋势",
            "到站趋势(实际)",
            "到站趋势(预测)",
            "差异",
          ],
          top: 5,
          right: 5,
          textStyle: {
            color: "#698694",
            fontSize: 10,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: "category",
          data: ["炼铁厂", "炼钢厂", "轧钢厂", "制造部", "人事处", "技术处"],
          axisTick: {
            show: false, //去掉刻度线
          },
          axisLine: {
            lineStyle: {
              color: "#0069cb", // x坐标轴颜色
            },
          },
          axisLabel: {
            show: true,
            interval: 0,
            // rotate: 45,
            textStyle: {
              color: "#90b9cc", // 坐标字体颜色
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#90b9cc", //文字颜色
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#3d4d6e"], //网状格颜色
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            data: [10, 50, 40, 50, 80],
            type: "line",
            name: "计划量",
            symbol: "none",
          },
          {
            data: [10, 50, 40, 50, 80],
            type: "line",
            name: "实际量",
            symbol: "none",
          },
          {
            data: [10, 50, 40, 50, 80],
            type: "line",
            name: "在途趋势",
            symbol: "none",
          },
          {
            data: [10, 50, 40, 50, 80],
            type: "line",
            name: "到站趋势(实际)",
            symbol: "none",
          },
          {
            data: [10, 50, 40, 50, 80],
            type: "line",
            name: "到站趋势(预测)",
            symbol: "none",
          },
          {
            data: [10, -50, 40, 50, 80],
            type: "bar",
            name: "差异",
            barWidth: 35,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 前一天  当天 后一天方法

    async api() {
      // get post 请求接口实例
      const a = await this.$api.get_api("http://10.6.1.110/ce.php");
      const a1 = await this.$api.post_api("http://10.6.1.110/ce.php");
    },
  },
  components: {},
  created() {
    // get post 请求接口实例
    this.api();
    this.$set(
      this.value1,
      0,
      this.$api.timeFormat(new Date() * 1 - 86400 * 30 * 1000)
    );
    this.$set(this.value1, 1, this.$api.timeFormat(new Date() * 1));
  },
  mounted() {
    this.echarts_list();
  },
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
}
.header1 {
  background: #1d3466;
  border-radius: 4px 4px 4px 4px;
  display: flex;
  justify-content: flex-start;
  padding-left: 0.6vw;
  align-items: center;
  padding-right: 0.3vw;
  margin-left: 0.25vw;
}
.header1 img {
  width: 18px;
  height: 18px;
}
.day {
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  color: #fff;
  line-height: 2.5vh;
  background: #0058ce;
  border-radius: 3px;
  margin-left: 0.5vw;
  font-size: 0.6vw;
  z-index: 999;
  cursor: pointer;
}
.day1 {
  margin-left: -1vw;
}

.bottom_max {
  width: 99.5vw;
  margin: 0 auto;
  overflow: hidden;
}

.bottom_max_top {
  width: 99.5vw;
  height: calc(87vh / 2);
  display: flex;
  justify-content: space-between;
}
/* .bottom_max_top_left {
  width: 50vw;
} */
/* icon图标 */
.flex {
  display: flex;
  justify-content: flex-start;
  color: #fff;
  font-size: 0.7vw;
  line-height: 3.5vh;
  align-items: center;
}
.flex img {
  width: 18px;
  height: 19px;
}
/* icon图标文字 */
.cai {
  padding-left: 0.2vw;
}
.tablelist {
  width: 68vw;
  height: 40vh;
  border-radius: 4px;
  background: #2a354b;
  overflow: hidden;
}
.tablelist1 {
  width: 31vw;
}
</style>
