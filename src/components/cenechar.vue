<template>
  <div style="font-size: 0.5vw">
    <div class="crigca" style="background-color: #2A354B">
      <div style="display: flex;justify-content: space-between;
      align-items: center;width: 14vw;margin-left: 0.5vw">
        <div>
          <span style="color: #90B9CC">实时:&nbsp</span>
          <span style="color: #e0b564">{{ time1eqs }}</span>
        </div>
        <div>
          <span style="color: #90B9CC">10分钟:&nbsp</span>
          <span style="color: #e0b564">{{ time2eqs }}</span>
        </div>
        <div>
          <span style="color: #90B9CC">1小时:&nbsp</span>
          <span style="color: #e0b564">{{ time3eqs }}</span>
        </div>
      </div>

      <div class="centLeftfour" style="margin-bottom: 0.2vh;margin-right: 0.5vw">
        <div style="display: flex;justify-content: space-between;align-items: center">
          <div style="background-color: #F76B6D;width: 1vw;height: 0.2vh"></div>
          <div style="margin-left: 0.2vw">标准</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center">
          <div style="background-color: #69DBFC;width: 1vw;height: 0.2vh"></div>
          <div style="margin-left: 0.2vw">实时</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center">
          <div style="background-color: #4B99FF;width: 1vw;height: 1vh"></div>
          <div style="margin-left: 0.2vw">10分钟平均</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center">
          <div style="background-color: #90FEB3;width: 1vw;height: 1vh"></div>
          <div style="margin-left: 0.2vw">1小时平均</div>

        </div>
        <div>
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
    return {
      stateTime: "",
      endTime: "",
      time1eqs: "",
      time2eqs: "",
      time3eqs: "",
    };
  },
  props: {
    id: {
      type: String,
    },
    fid: {
      type: String,
    },
    xid: {
      type: String,
    },
    name: {
      type: String,
    },
    arr: {
      type: Array,
    },
    titem: {
      type: String,
    },
    stateTime: {
      type: String,
    },
    endTime: {
      type: String,
    }
  },
  methods: {
    gagag() {
      let a = "haha";
      this.$emit("utime", this.name);
    },
    echarts_list(atd1, atd2, atd3, atd4,atd5) {
      var chartDom = document.getElementById(this.id);
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
          data: atd2,
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
            interval: 5,
            // rotate: 45,
            textStyle: {
              color: "#90b9cc", // 坐标字体颜色
              fontSize: 10,
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#90b9cc", //文字颜色
              fontSize: 10,
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
        dataZoom:[//x轴滑动条
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,    //初始化时，滑动条宽度开始标度
            bottom: '7%',
            end: 50,
            height: 3,
            fillerColor:'#3E86FF',
            borderColor: "rgba(0,0,0,0)",
            backgroundColor: 'rgba(0,0,0,0)',//两边未选中的滑动条区域的颜色
            showDataShadow: false,//是否显示数据阴影 默认auto
            showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
            handleSize: "100%",
            handleColor: '#ddd',
            handleStyle: { // 两侧缩放手柄的样式配置。
              borderColor: '#cacaca',
              borderWidth: '3',
              shadowBlur: 2,
              background: '#ddd',
              shadowColor: '#ddd',
            },
          },
          {
            type:'inside',
            xAxisIndex:0,
            zoomOnMouseWheel:false,  //滚轮是否触发缩放
            moveOnMouseMove:true,  //鼠标滚轮触发滚动
            moveOnMouseWheel:true
          }
        ],
        series: [
          {
            data: atd1,
            type: "line",
            itemStyle: {
              normal: {
                color: '#69DBFC'
              }
            },
            symbol: "none",
          },
          {
            data: atd5,
            type: "line",
            itemStyle: {
              normal: {
                color: '#F76B6D'
              }
            },
            symbol: "none",
          },
          {
            data: atd4,
            type: "bar",
            itemStyle: {
              normal: {
                color: '#90FEB3'
              }
            },
            barWidth: 3,
          },
          {
            data: atd3,
            type: "bar",
            itemStyle: {
              normal: {
                color: '#4B99FF'
              }
            },
            barWidth: 3,
            barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
          },
        ],
      };
      option && myChart.setOption(option);
    },
    async new_data1(idrs) {
      let obj = {
        id: [idrs],
        beginTime: this.stateTime,
        endTime: this.endTime,
        limit: 3600,
        orderBy: "desc"
      }
      const a2 = await this.$api.zhongtai_api(obj);
      return a2;
    },
    async new_data2(idrs) {
      let obj = {id: [idrs],}
      const a2 = await this.$api.zhongtai_apisx(obj);
      return a2;
    },
    async goni() {
      let brs = Object.values(await this.new_data2(this.id))[0];
      return brs;
    },
  },
  components: {},
  created() {
  },
  watch:{
    endTime:{
      async handler(){
        let atc1 = await this.new_data1(this.id.substring(0, this.id.length - 1));
        let atd1 = [];
        for (let i = 0; i < atc1.length; i++) {
          atd1.push(atc1[i].v.toFixed(3))
        }
        atd1 = atd1.reverse()
        //分钟timeid和v数组
        let atc2 = await this.new_data1(this.fid.substring(0, this.fid.length - 1));
        //分钟时间
        let atd2 = [];
        //分钟平均值
        let atd3 = [];
        for (let i = 0; i < atc2.length; i++) {
          atd2.push(atc2[i].timeID.substring(10, 16))
          atd3.push(atc2[i].v.toFixed(3))
        }
        atd2 = atd2.reverse();
        atd3 = atd3.reverse();
        //小时timeid和v数组
        //小时timeid
        let atd4 = [];
        let atc3 = await this.new_data1(this.xid.substring(0, this.xid.length - 1));
        let ace = 0;
        let cucie = atc3.length - 1;
        let iet = [];
        for (let i = 0; i < atd2.length; i++) {
          if (i % 6 == 0) {
            atd4.push(atc3[cucie].v.toFixed(3))
            cucie = cucie - 1
            iet.push(i)
          } else {
            atd4.push(0)
          }
        }
        for (let i = 0; i < iet.length; i++) {
          ace = 0;
          for (let j = 1; j < 6; j++) {
            ace = ace * 1 + atd3[iet[i] + j] * 1
            atd4[iet[i] + j] = (ace * 1 / (j)).toFixed(3)
          }
        }
        let atd5 = []
        for (let i = 0; i < atd2.length; i++) {
          atd5.push(this.arr)
        }
        this.echarts_list(atd1, atd2, atd3, atd4,atd5);
      },
      deep:true
    }
  },
  async mounted() {
    let atc1 = await this.new_data1(this.id.substring(0, this.id.length - 1));
    let atd1 = [];
    for (let i = 0; i < atc1.length; i++) {
      atd1.push(atc1[i].v.toFixed(3))
    }
    atd1 = atd1.reverse()
    this.time1eqs = (atd1[atd1.length - 1] * 1).toFixed(1)
    //分钟timeid和v数组
    let atc2 = await this.new_data1(this.fid.substring(0, this.fid.length - 1));
    //分钟时间
    let atd2 = [];
    //分钟平均值
    let atd3 = [];
    for (let i = 0; i < atc2.length; i++) {
      atd2.push(atc2[i].timeID.substring(10, 16))
      atd3.push(atc2[i].v.toFixed(3))
    }
    atd2 = atd2.reverse();
    atd3 = atd3.reverse();
    this.time3eqs = (atd3[atd3.length - 1] * 1).toFixed(1)
    //小时timeid和v数组
    //小时timeid
    let atd4 = [];
    let atc3 = await this.new_data1(this.xid.substring(0, this.xid.length - 1));
    let ace = 0;
    let cucie = atc3.length - 1;
    let iet = [];
    for (let i = 0; i < atd2.length; i++) {
      if (i % 6 == 0) {
        atd4.push(atc3[cucie].v.toFixed(3))
        cucie = cucie - 1
        iet.push(i)
      } else {
        atd4.push(0)
      }
    }
    for (let i = 0; i < iet.length; i++) {
      ace = 0;
      for (let j = 1; j < 6; j++) {
        ace = ace * 1 + atd3[iet[i] + j] * 1
        atd4[iet[i] + j] = (ace * 1 / (j)).toFixed(3)
      }
    }
    let atd5 = []
    for (let i = 0; i < atd2.length; i++) {
      atd5.push(this.arr)
    }
    console.log(atd4)
    this.time2eqs = (atd4[atd4.length - 6] * 1).toFixed(1)
    this.echarts_list(atd1, atd2, atd3, atd4,atd5);
  },

};
</script>


<style scoped>
.aa {
  width: 70vw;
  height: 50vh;
  background-color: #2A354B;
  margin-left: 0.5vw;
}

* {
  color: #fff;
}

.crigca {
  height: 4vh;
  display: flex;
  align-items: center;
  font-size: 0.5vw;
  background-color: #1E2D42;
  justify-content: space-between;
  width: 70vw;
  margin-top: 1vh;
  margin-left: 0.5vw;
}

.centLeftfour {
  width: 16.5vw;
  display: flex;
  justify-content: space-between;
  font-size: 0.5vw;
  align-items: flex-end;
}

</style>
