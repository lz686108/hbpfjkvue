<template>
  <div style="font-size: 0.5vw">
    <div class="crigca">
      <div>{{ name }}</div>
      <div style="display: flex;justify-content: space-between;
      align-items: center;width: 10.5vw;margin-right: 0.4vw;
">
        <div>
          <span style="color: #90B9CC">实时:&nbsp</span>
          <span style="color: #e0b564">100</span>
        </div>
        <div>
          <span style="color: #90B9CC">10分钟:&nbsp</span>
          <span style="color: #e0b564">10</span>
        </div>
        <div>
          <span style="color: #90B9CC">1小时:&nbsp</span>
          <span style="color: #e0b564">105</span>
        </div>
      </div>
    </div>
    <div class="aa" :id="id"></div>
  </div>
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
    name: {
      type: String,
    },
    arr: {
      type: Array,
    },
  },
  methods: {
    gagag() {
      let a = "haha";
      this.$emit("utime", this.name);
    },
    echarts_list() {
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        // title:{
        //   text:this.name,
        //   padding:[12,0,0,8],
        //   textStyle:{
        //     color:"white",
        //     fontSize: '10',
        //   },
        // },
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
          top: 12,
          bottom: 25,
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
          data: ["9:18", "9:28", "9:38", "9:48", "9:58"],
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
              fontSize: 10,
            },
          },
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 300,
          interval: 100,
          axisLabel: {
            textStyle: {
              color: "#90b9cc", //文字颜色
              fontSize:10,
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
            data: this.arr,
            type: "line",
            symbol: "none",
          },
          {
            data: [270, 210, 260, 220, 200],
            type: "line",
            itemStyle: {
              normal: {
                color: 'red'
              }
            },
            symbol: "none",
          },
          {
            data: [250, 250, 250, 250, 250],
            type: "line",
            itemStyle: {
              normal: {
                color: '#69DBFC'
              }
            },
            symbol: "none",
          },
          {
            data: [100, 100, 340, 350, 380],
            type: "bar",
            itemStyle: {
              normal: {
                color: '#90FEB3'
              }
            },
            barWidth: 6,
          },
          {
            data: [210, 210, 240, 250, 280],
            type: "bar",
            itemStyle: {
              normal: {
                color: '#4B99FF'
              }
            },
            barWidth: 6,
            barGap:'80%',/*多个并排柱子设置柱子之间的间距*/
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  components: {},
  created() {
  },
  mounted() {
    this.echarts_list();
    console.log(this.arr);
  },
};
</script>


<style scoped>
.aa {
  width: 25vw;
  height: 39.8vh;
  background-color: #1E2D42;
}

* {
  color: #fff;
}

.crigca {
  height: 3vh;
  display: flex;
  align-items: center;
  font-size: 0.5vw;
  background-color: #1E2D42;
  padding-left: 0.5vw;
  justify-content: space-between;
}
</style>
