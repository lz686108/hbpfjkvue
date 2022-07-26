<template>
  <div class="aa" id="echarts_1"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
    },
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
  },
  components: {},
  created() {},
  mounted() {
    this.echarts_list();
    console.log(this.id);
  },
};
</script>


<style scoped>
.aa {
  width: 50vw;
  height: 40vh;
  border: 1px solid red;
}
</style>
