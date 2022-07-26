<template>
  <!-- 头部 -->
  <div class="max">
    <div class="header">
      <div class="flex_y">
        <div class="header1 xg_time_control">
          <img src="../assets/time.png" alt="" />
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            @change="datalist()"
          >
          </el-date-picker>
          <div class="day day1" @click="day(1)">前一天</div>
          <div class="day" @click="day(2)">今天</div>
          <div class="day" @click="day(3)">后一天</div>
        </div>
      </div>
    </div>
 

            <div class="xg_meng">
              <el-dialog
                :visible.sync="dialogVisible"
                width="25vw"
                :close-on-click-modal="false"
              >
                <el-form label-width="5vw">
                  <div class="flex" style="height: 6vh">
                    <el-form-item label="品名">
                      <div class="xg_input">
                        <el-input
                          placeholder="请输入品名"
                          v-model="bonus.pm"
                        ></el-input>
                      </div>
                    </el-form-item>

                    <el-form-item label="供户">
                      <div class="xg_input">
                        <el-select placeholder="请选择改善类别">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="flex">
                    <el-form-item label="日期">
                      <div class="xg_input">
                        <el-date-picker
                          v-model="bonus.date"
                          type="date"
                          placeholder="选择日期"
                          format="yyyy-MM-dd"
                          value-format="yyyy-MM-dd"
                        >
                        </el-date-picker>
                      </div>
                    </el-form-item>
                  </div>
                </el-form>

                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>

                  <el-button type="primary" @click="sure()">确 定</el-button>
                </span>
              </el-dialog>
            </div>
    <!-- 表格 -->
    <div class="bottom_max">
      <div class="bottom_max_top">
        <div class="bottom_max_top_left">
          <div class="flex">
            <img src="../assets/icon1@2x.png" alt="" />
            <div class="cai">采购发货计划跟踪</div>
          </div>
          <div class="tablelist">
            <dm_table @dmclick = car :dmheight="'17'" :dmthead="tablethead" :dmlist="tablelist">
            </dm_table>
          </div>
        </div>
        <div class="bottom_max_top_left bottom_max_top_right">
          <div class="flex_1">
            <div class="flex">
              <img
                src="../assets/icon2@2x.png"
                alt=""
                style="width: 17px; height: 17px"
              />
              <div class="cai">预警信息</div>
            </div>
          </div>
          <div class="tablelist tablelist1">
              <dm_table @dmclick = car :dmheight="'17'" :dmthead="tablethead" :dmlist="tablelist">
            </dm_table>
          </div>
        </div>
        </div>
      </div>
      <div class="bottom_max_top">
        <div class="bottom_max_top_left">
          <div class="flex">
            <img
              src="../assets/icon3@2x.png"
              style="width: 14px; height: 16px"
              alt=""
            />
            <div class="cai">在途明细</div>
          </div>
          <div class="tablelist">
            <!-- 时间过滤器 -->
            <!-- {{ new Date() | dataFormt }} -->
              <dm_table @dmclick = car :dmheight="'17'" :dmthead="tablethead" :dmlist="tablelist">
            </dm_table>
          </div>
        </div>
        <div class="bottom_max_top_left bottom_max_top_right">
          <div class="flex">
            <img
              src="../assets/icon4@2x.png"
              alt=""
              style="width: 15px; height: 15px"
            />
            <div class="cai">趋势图</div>
          </div>
          <div class="tablelist tablelist1" id="echarts_1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { export2Excel } from "..//common/js/util";
export default {
  data() {
    return {
      tablelist: [
        {
          name: "王少",
          age: "14",
          number: "50",
          bb: 123,
          cc: 123,
        },
        {
          name: "李四",
          age: "50",
          number: "80",
          bb: 100,
          cc: 200,
        },
      ],
      tablethead: [
        {
          name: "姓名",
          key: "name",
          text: "left",
          width: "10%",
        },
        {
          name: "年龄",
          key: "age",
          text: "right",
          width: "30%",
        },
        {
          name: "分数",
          key: "number",
          text: "right",
          width: "20%",
        },
        {
          name: "成绩",
          key: "cc",
          text: "right",
          width: "20%",
        },
        {
          name: "成绩1",
          key: "bb",
          text: "left",
          width: "20%",
        },
      ],
      bonus: {},
      dialogVisible: false,
      a: "",
      value1: [],
      time: 5,
      mal_name: "全部",
      options: [
        {
          label: "测试1",
          value: "测试1",
        },
        {
          label: "测试2",
          value: "测试2",
        },
      ],
      arr: [
        {
          name: "王某",
          num: 123,
        },
        {
          name: "王某",
          num: 123,
        },
        {
          name: "王某",
          num: 123,
        },
        {
          name: "王某",
          num: 123,
        },
        {
          name: "王某",
          num: 123,
        },
      ],
      arr1: ["name", "num"],
    };
  },
  methods: {
    car(e) {
      console.log(e);
    },
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
    day(e) {
      if (e == 1) {
        this.$set(
          this.value1,
          0,
          this.$api.timeFormat(new Date(this.value1[0]) * 1 - 86400 * 1000)
        );
        this.$set(
          this.value1,
          1,
          this.$api.timeFormat(new Date(this.value1[1]) * 1 - 86400 * 1000)
        );

        console.log(this.value1);
      }
      if (e == 2) {
        this.$set(this.value1, 0, this.$api.timeFormat(new Date() * 1));
        this.$set(this.value1, 1, this.$api.timeFormat(new Date() * 1));
      }
      if (e == 3) {
        this.$set(
          this.value1,
          0,
          this.$api.timeFormat(new Date(this.value1[0]) * 1 + 86400 * 1000)
        );
        this.$set(
          this.value1,
          1,
          this.$api.timeFormat(new Date(this.value1[1]) * 1 + 86400 * 1000)
        );
      }
    },
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
