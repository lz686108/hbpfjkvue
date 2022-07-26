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
    <!-- 表格 -->
    <div class="bottom_max">
      <div class="bottom_max_top">
        <div class="bottom_max_top_left">
          <div class="flex">
            <img src="../assets/icon1@2x.png" alt="" />
            <div class="cai">采购发货计划跟踪</div>
            <button style="" @click="dialogVisible = true">弹窗</button>
            <!-- <div class="xg_page">
              <el-pagination
                prev-text="<上一页"
                next-text="下一页>"
                background
                layout="prev, pager, next"
                :page-size="10"
                :total="1000"
                @current-change="pageCurrentChange"
              >
              </el-pagination>
            </div>
            <div class="xg_Popup">
              <el-popconfirm
                icon-color="red"
                title="确定删除吗？"
                @confirm="del1(item)"
              >
                <span class="shou" style="color: #fc6f3a" slot="reference"
                  >删除按钮</span
                >
              </el-popconfirm>
            </div> -->

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
          </div>
          <div class="tablelist">
            <table class="xg_table-list">
              <tr>
                <th>序号</th>
                <th>标题</th>
                <th>年纪</th>
              </tr>
            </table>
            <div class="xg_scroll">
              <table>
                <tr v-for="(item, index) in arr" :key="index">
                  <td
                    :class="
                      typeof item[arr1[index]] == 'number'
                        ? 'xg_right'
                        : 'xg_left'
                    "
                  >
                    {{ typeof item[arr1[index]] }}
                  </td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </table>
            </div>
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
          <div class="tablelist tablelist1"></div>
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
          <div class="tablelist"></div>
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
    // 时间格式化
    timeFormat(str) {
      // yyyy-MM-dd HH:mm:ss
      let dt = new Date(str);
      // 获取年月日
      let y = dt.getFullYear();
      let m = (dt.getMonth() + 1).toString().padStart(2, "0");
      let d = dt.getDate().toString().padStart(2, "0");
      let h = dt.getHours().toString().padStart(2, "0");
      return `${y}-${m}-${d}`;
    },
    // 前一天  当天 后一天方法
    day(e) {
      if (e == 1) {
        let a = [];
        a[0] = this.timeFormat(new Date(this.value1[0]) * 1 - 86400 * 1000);
        a[1] = this.timeFormat(new Date(this.value1[1]) * 1 - 86400 * 1000);
        this.value1 = a;
      }
      if (e == 2) {
        let a = [];
        a[0] = this.timeFormat(new Date() * 1 - 86400 * 1000);
        a[1] = this.timeFormat(new Date() * 1 - 86400 * 1000);
        this.value1 = a;
      }
      if (e == 3) {
        let a = [];
        a[0] = this.timeFormat(new Date(this.value1[0]) * 1 + 86400 * 1000);
        a[1] = this.timeFormat(new Date(this.value1[1]) * 1 + 86400 * 1000);
        this.value1 = a;
      }
    },
  },
  components: {},
  created() {
    //默认时间格式化  30天周期
    this.value1[0] = this.timeFormat(new Date() - 86400 * 30 * 1000);
    this.value1[1] = this.timeFormat(new Date());
  },
  mounted() {
    this.echarts_list();
  },
};
</script>
<style>
</style>

<style scoped>
.max {
  --time-color: #1d3466; /* 时间选择器颜色 */
  --text-color: #fff;
  --day-color: #0058ce; /* 前一天颜色 */
  --max-color: #2a354b; /* div颜色 */
  --table-td: 3vh; /* 表格高度 */
  --table-th: 2.7vh; /* 表格高度 */
  --table-border: 0.1vw solid #2b354a;
  --table-thead-color: #162851;
  --table-tr-color: #1a2633;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
}
.header1 {
  background: var(--time-color);
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
  color: var(--text-color);
  line-height: 2.5vh;
  background: var(--day-color);
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
/* icon图标 */
.flex {
  display: flex;
  justify-content: flex-start;
  color: var(--text-color);
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
  background: var(--max-color);
  overflow: hidden;
}
.tablelist1 {
  width: 31vw;
}

/* 表格样式 */
/* 滚动的高 */
/* 表格标题 */
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.xg_table-list {
  width: 99%;
  margin: 0 auto;
  background: var(--table-thead-color);
  height: var(--table-th);
  line-height: var(--table-th);
  font-size: 0.7vw;
  color: var(--text-color);
  margin-top: 0.5vh;
  box-sizing: border-box;
}
.xg_table-list th {
  width: calc(100% / 3);
  text-align: center;
  font-weight: 100;
  border-right: var(--table-border);
  padding: 0;
  box-sizing: border-box;
}
.xg_scroll {
  width: 99%;
  height: 36vh;
  margin: 0 auto;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.xg_scroll table {
  width: 100%;
  color: var(--text-color);
  font-weight: 100;
}
.xg_scroll table td {
  width: calc(100% / 3);
  text-align: center;
  height: 3vh;
  font-size: 0.6vw;
  padding: 0;
  width: 20vw;
  border-bottom: var(--table-border);
  border-right: var(--table-border);
  box-sizing: border-box;
}
.xg_scroll table tr {
  background: var(--table-tr-color);
}

/* 表格样式结束 */
</style>
