<template>
  <div style="font-size: 0.5vw">
    <div class="crigca">
      <div>{{ utr }}{{ name }}{{uar}}</div>
      <div style="display: flex;justify-content: space-between;
      align-items: center;width: 13vw;margin-right: 0.4vw;
">
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
    </div>
    <div class="aa" :id="id"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      ariTime: "", //当前时间
      oneTime: "", //一小时姐之前时间
      miaojilist: [],
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
    utr: {
      type: String,
    },
    uar: {
      type: String,
    }
  },
  methods: {
    gagag() {
      let a = "haha";
      this.$emit("utime", this.name);
    },
    echarts_list(atd1, atd2, atd3, atd4) {
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
          // min: 0,
          // max: 10,
          // interval: 5,
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
            data: [this.arr, this.arr, this.arr, this.arr, this.arr, this.arr, this.arr, this.arr, this.arr, this.arr, this.arr, this.arr],
            type: "line",
            itemStyle: {
              normal: {
                color: '#F76B6D'
              }
            },
            symbol: "none",
          },
          {
            data: atd3,
            type: "bar",
            itemStyle: {
              normal: {
                color: '#4B99FF'
              }
            },
            barWidth: 4,
          },
          {
            data: atd4,
            type: "bar",
            itemStyle: {
              normal: {
                color: '#90FEB3'
              }
            },
            barWidth: 4,
            barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
          },
        ],
      };
      clearInterval(this.times);
      this.times = setInterval(async () => {
        let tnuir = await this.goni();
        //秒级数据
        atd1.shift()
        atd1.push(tnuir)
        //10分钟
        let time = new Date();
        this.ariTime = this.$api.timeFormat(time, 'getSeconds')
        let time1 = new Date() * 1 - 120 * 60 * 1000
        this.oneTime = this.$api.timeFormat(time1, 'getSeconds')
        //10分钟区间接口
        let atc2 = await this.new_data1(this.fid);
        //十分钟值
        let b1 = atc2[0].v.toFixed(3);
        //已经存在的10分钟柱状图的最后一个柱状的时间
        let c1 = atd2[atd2.length - 1];
        //10分钟区间接口返回的最新一笔值(接口是每分钟调用,值是每间隔10分钟返回一次)
        let a1 = atc2[0].timeID.substring(10, 16);
        if (a1 != c1) {
          atd3.shift();
          atd3.push(b1);
          atd2.shift();
          atd2.push(a1)
          //小时区间查询
          atd4.shift();
          let atc3 = await this.new_data1(this.xid);
          console.log(atc3[0].timeID.substring(10, 16))
          console.log(c1)
          console.log(atd2[atd2.length - 1])
          if (atc3[0].timeID.substring(10, 16) == atd2[atd2.length - 1]) {
            console.log("判断")
            atd4.push(atc3[0].v.toFixed(3))
          } else {
            //找到最后一次整点的位置
            let b = 0;
            for (let i = 0; i < atd2.length; i++) {
              if (atd2[i].substring(0, 6) == atc3[0].timeID.substring(10, 16)) {
                b = i;
              }
            }
            let b1 = 0;
            for (let i = 0; i < atd2.length - b - 1; i++) {
              b1 = b1 + atd3[i + b + 1] * 1
            }
            atd4.push((b1 / (atd2.length - b - 1)).toFixed(3))
          }
        }
        myChart.setOption({
          xAxis: {
            data: atd2,
          },
          series: [{data: atd1}, {}, {data: atd3}, {data: atd4}],
        });
      }, 60000);
      option && myChart.setOption(option);
    },
    //中台区间值
    async new_data1(idrs) {
      let obj = {
        id: [idrs],
        beginTime: this.oneTime,
        endTime: this.ariTime,
        limit: 3600,
        orderBy: "desc"
      }
      const a2 = await this.$api.zhongtai_api(obj);
      return a2;
    },
    //中台瞬时值
    async new_data2(idrs) {
      let obj = {id: [idrs],}
      const a2 = await this.$api.zhongtai_apisx(obj);
      return a2;
    },
    async goni() {
      let brs = Object.values(await this.new_data2(this.id))[0];
      return brs;
    }
  },
  components: {}
  ,
  created() {
    //根据开始结束时间去秒级区间查询秒级数据,十分钟数据和小时数据
    let time = new Date();
    this.ariTime = this.$api.timeFormat(time, 'getSeconds')
    let time1 = new Date() * 1 - 120 * 60 * 1000
    this.oneTime = this.$api.timeFormat(time1, 'getSeconds')
    //秒级区间
  },
  async mounted() {
    //秒级v数组
    let atc1 = await this.new_data1(this.id);
    let atd1 = [];
    for (let i = 0; i < atc1.length; i++) {
      atd1.push(atc1[i].v.toFixed(3))
    }
    atd1 = atd1.reverse()
    this.time1eqs = (atd1[atd1.length - 1] * 1).toFixed(1)
    console.log(atd1)
    //分钟timeid和v数组
    let atc2 = await this.new_data1(this.fid);
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
    let atc3 = await this.new_data1(this.xid);
    //判断小时的顺序
    //小时值是前一小时
    let a = 0;//第一个小时值
    let b = 0;//第二个小时值
    //找出第一个和第二个小时值的位置
    for (let i = 0; i < atd2.length; i++) {
      if (atd2[i].substring(0, 6) == atc3[1].timeID.substring(10, 16)) {
        a = i;
      }
      if (atd2[i].substring(0, 6) == atc3[0].timeID.substring(10, 16)) {
        b = i;
      }
    }
    //开始到第一个小时
    let aa = 0;
    for (let i = 0; i < a; i++) {
      aa = aa + atd3[i] * 1
      atd4.push((aa / (i + 1)).toFixed(3));
    }
    atd4.push(atc3[1].v.toFixed(3))
    //第一个小时到第二个小时
    let a1 = 0;
    for (let i = 0; i < b - a - 1; i++) {
      a1 = a1 + atd3[i + a + 1] * 1
      atd4.push((a1 / (i + 1)).toFixed(3))
    }
    //第二个小时值有可能没有
    atd4.push(atc3[0].v.toFixed(3))
    //第二个小时到截至
    let b1 = 0;
    for (let i = 0; i < atd2.length - b - 1; i++) {
      b1 = b1 + atd3[i + b + 1] * 1
      atd4.push((b1 / (i + 1)).toFixed(3))
    }
    this.time2eqs = (atd4[atd4.length - 1] * 1).toFixed(1)
    this.echarts_list(atd1, atd2, atd3, atd4);
  },
}
;
</script>


<style scoped>
.aa {
  width: 23.86vw;
  height: 13.7vh;
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
