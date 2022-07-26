<template>
  <div class="centRight">
    <div class="centRightFirst" style="margin-top: 1vh">
      <dm_time_day_section @timeace="quaerc"></dm_time_day_section>
    </div>
    <div style="height: 1vh;background-color: #091022"></div>
    <table class="table" style="width: 19.9vw;margin-left: 0.5vw;margin-top: 1vh">
      <thead>
      <tr>
        <td>工序</td>
        <td>烧结</td>
        <td>竖炉</td>
        <td>炼铁</td>
        <td>炼钢</td>
        <td>能源</td>
      </tr>
      </thead>
      <tbody style="height: 11vh">
      <tr>
        <td style="text-align: left">10分钟</td>
        <td @click="dicueat('烧结','fid','1')" :style="{'color':lc==1?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ s1 }}
        </td>
        <td @click="dicueat('竖炉','fid','2')" :style="{'color':lc==2?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ s2 }}
        </td>
        <td @click="dicueat('炼铁','fid','3')" :style="{'color':lc==3?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ s3 }}
        </td>
        <td @click="dicueat('炼钢','fid','4')" :style="{'color':lc==4?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ s4 }}
        </td>
        <td @click="dicueat('能源','fid','5')" :style="{'color':lc==5?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ s5 }}
        </td>
      </tr>
      <tr>
        <td style="text-align: left">1小时</td>
        <td @click="dicueat('烧结','xid','6')" :style="{'color':lc==6?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x1 }}
        </td>
        <td @click="dicueat('竖炉','xid','7')" :style="{'color':lc==7?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x2 }}
        </td>
        <td @click="dicueat('炼铁','xid','8')" :style="{'color':lc==8?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x3 }}
        </td>
        <td @click="dicueat('炼钢','xid','9')" :style="{'color':lc==9?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x4 }}
        </td>
        <td @click="dicueat('能源','xid','10')" :style="{'color':lc==10?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x5 }}
        </td>
      </tr>
      <tr style="text-align: left">
        <td @click="dicueat('烧结','ceid','11')" :style="{'color':lc==11?'#0061d1':''}" style="cursor: pointer">累计</td>
        <td @click="dicueat('烧结','lid','12')" :style="{'color':lc==12?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x1 * 1 + s1 * 1 }}
        </td>
        <td @click="dicueat('竖炉','lid','13')" :style="{'color':lc==13?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x2 * 1 + s2 * 1 }}
        </td>
        <td @click="dicueat('炼铁','lid','14')" :style="{'color':lc==14?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x3 * 1 + s3 * 1 }}
        </td>
        <td @click="dicueat('炼钢','lid','15')" :style="{'color':lc==15?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x4 * 1 + s4 * 1 }}
        </td>
        <td @click="dicueat('能源','lid','16')" :style="{'color':lc==16?'#0061d1':''}"
            style="cursor: pointer;text-align: right">{{ x5 * 1 + s5 * 1 }}
        </td>
      </tr>
      </tbody>
    </table>
    <div class="centRightFirst">
      异常信息
    </div>
    <table class="table" style="width: 19.9vw;margin-left: 0.5vw;margin-top: 1vh">
      <thead>
      <tr>
        <td style="width: 2vw">序号</td>
        <td style="width: 6vw">点位</td>
        <td>时间</td>
        <td>污染物</td>
        <td>数据</td>
      </tr>
      </thead>
      <tbody style="height: 63vh">
      <tr v-for="(item,index) in teaslist" :key="index">
        <td style="width: 2vw"> {{ index + 1 }}</td>
        <td style="width: 6vw;text-align: left">{{ item.dianwei }}</td>
        <td style="text-align: left"> {{ item.shijian.substring(10, 16) }}</td>
        <td style="text-align: left">{{ item.wuranwu }}</td>
        <td style="text-align: right">{{ (item.shuju * 1).toFixed(1) }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import axios from "_axios@0.21.4@axios";

export default {
  data() {
    return {
      teaslist: [],
      ceca1: [],
      caca2: [],
      //10分钟
      s1: 0,
      s2: 0,
      s3: 0,
      s4: 0,
      s5: 0,
      //1小时
      x1: 0,
      x2: 0,
      x3: 0,
      x4: 0,
      x5: 0,
      //leiji
      l1: 0,
      l2: 0,
      l3: 0,
      l4: 0,
      l5: 0,
      lc: 0,
      time: "",
      time1: "",
    };
  },
  methods: {
    quaerc(e, q) {
      console.log(e, q)
      this.time = e;
      this.time1 = q;
      this.teaslist = []
      this.s1 = 0,
          this.s2 = 0,
          this.s3 = 0,
          this.s4 = 0,
          this.s5 = 0,
          this.x1 = 0,
          this.x2 = 0,
          this.x3 = 0,
          this.x4 = 0,
          this.x5 = 0,
          this.l1 = 0,
          this.l2 = 0,
          this.l3 = 0,
          this.l4 = 0,
          this.l5 = 0,
          axios({
            method: "post",
            url: "http://10.6.1.179:40018/mpd/ylxjb/hbbz/raqutiurs",
            params: {
              time: this.time,
              time1: this.time1,
            },
          }).then((res) => {
            this.teaslist = res.data;
            for (let i = 0; i < this.teaslist.length; i++) {
              switch (this.teaslist[i].quyu) {
                case "烧结":
                  if (this.teaslist[i].fid == "1") {
                    this.s1 = this.s1 * 1 + 1
                  } else {
                    this.x1 = this.x1 * 1 + 1
                  }
                  break;
                case "竖炉":
                  if (this.teaslist[i].fid == "1") {
                    this.s2 = this.s2 * 1 + 1
                  } else {
                    this.x2 = this.x2 * 1 + 1
                  }
                  break;
                case "炼铁":
                  if (this.teaslist[i].fid == "1") {
                    this.s3 = this.s3 * 1 + 1
                  } else {
                    this.x3 = this.x3 * 1 + 1
                  }
                  break;
                case "炼钢":
                  if (this.teaslist[i].fid == "1") {
                    this.s4 = this.s4 * 1 + 1
                  } else {
                    this.x4 = this.x4 * 1 + 1
                  }
                  break;
                case "能源":
                  if (this.teaslist[i].fid == "1") {
                    this.s5 = this.s5 * 1 + 1
                  } else {
                    this.x5 = this.x5 * 1 + 1
                  }
                  break;
              }
            }
          });
    },
    dicueat(a, b, c) {
      this.lc = c;
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/hbbz/insertyctj",
        params: {},
      }).then((res) => {
            this.teaslist = res.data;
            var cesoup = [];
            if (b == 'fid') {
              for (let i = 0; i < this.teaslist.length; i++) {
                if (this.teaslist[i].fid == "1" && this.teaslist[i].quyu == a) {
                  cesoup.push(this.teaslist[i])
                }
              }
            }
            if (b == "xid") {
              for (let i = 0; i < this.teaslist.length; i++) {
                if (this.teaslist[i].xid == "1" && this.teaslist[i].quyu == a) {
                  cesoup.push(this.teaslist[i])
                }
              }
            }
            if (b == "lid") {
              for (let i = 0; i < this.teaslist.length; i++) {
                if (this.teaslist[i].quyu == a) {
                  cesoup.push(this.teaslist[i])
                }
              }
            }
            if (b == "ceid") {
              cesoup = this.teaslist
            }
            this.teaslist = cesoup
          }
      )
      ;

    },
    eacoped() {
      this.teaslist = []
      this.s1 = 0,
          this.s2 = 0,
          this.s3 = 0,
          this.s4 = 0,
          this.s5 = 0,
          this.x1 = 0,
          this.x2 = 0,
          this.x3 = 0,
          this.x4 = 0,
          this.x5 = 0,
          this.l1 = 0,
          this.l2 = 0,
          this.l3 = 0,
          this.l4 = 0,
          this.l5 = 0,
          axios({
            method: "post",
            url: "http://10.6.1.179:40018/mpd/ylxjb/hbbz/insertyctj",
            params: {},
          }).then((res) => {
            this.teaslist = res.data;
            console.log(this.teaslist)
            for (let i = 0; i < this.teaslist.length; i++) {
              switch (this.teaslist[i].quyu) {
                case "烧结":
                  if (this.teaslist[i].fid == "1") {
                    this.s1 = this.s1 * 1 + 1
                  } else {
                    this.x1 = this.x1 * 1 + 1
                  }
                  break;
                case "竖炉":
                  if (this.teaslist[i].fid == "1") {
                    this.s2 = this.s2 * 1 + 1
                  } else {
                    this.x2 = this.x2 * 1 + 1
                  }
                  break;
                case "炼铁":
                  if (this.teaslist[i].fid == "1") {
                    this.s3 = this.s3 * 1 + 1
                  } else {
                    this.x3 = this.x3 * 1 + 1
                  }
                  break;
                case "炼钢":
                  if (this.teaslist[i].fid == "1") {
                    this.s4 = this.s4 * 1 + 1
                  } else {
                    this.x4 = this.x4 * 1 + 1
                  }
                  break;
                case "能源":
                  if (this.teaslist[i].fid == "1") {
                    this.s5 = this.s5 * 1 + 1
                  } else {
                    this.x5 = this.x5 * 1 + 1
                  }
                  break;
              }
            }
          });
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
  mounted() {
    this.eacoped();
    setInterval(this.eacoped, 120000);
  }
}
;
</script>
<style scoped>
.centRight {
  width: 20.9vw;
  height: 90.5vh;
  background-color: #2A354B;
}

.centRightFirst {
  width: 20.9vw;
  height: 3vh;
  background-color: #091022;
  color: #ffffff;
  font-size: 0.8vw;
  display: flex;
  align-items: center;
}
</style>
<style scoped>
.table,
thead,
tbody tr {
  width: 100%;
  /* 表格自动布局 */
  display: table;
  table-layout: fixed;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody tr:hover > td {
  background-color: #284269;
}

tr:hover {
  background-color: #284269;
}

/* 实现鼠标滑动表格的一整行变色 */
.table tbody {
  /* 表格滚轮 */
  height: 33.5vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #465e72;
  width: 99.8%;
  scrollbar-width: none;
  border-collapse: collapse;
}

.table tbody tr td {
  background-color: #1f2e43;
  font-size: 0.6vw;
  height: 3vh;
}

.table thead tr td {
  height: 2.7vh;
  font-size: 0.7vw;
  font-weight: normal;
  color: #f8faff;
}

.table tbody tr {
  color: #fff;
}

.table td {
  background-color: #1e2d42;
  border-bottom: solid 0.1vw #2b354a;
}

.table thead tr td {
  background-color: #142a53;
  border-bottom: solid 0.1vw #2b354a;
  text-align: center;
}

.table {
  margin-left: 0.2vw;
}

.table thead {
  width: 99.8%;
  color: #fff;
  border-collapse: collapse;
}

/* 取消表格的滚轮 */
::-webkit-scrollbar-thumb {
  background-color: #000 !important;
  border-radius: 3vw;
}

/* 滑轮背景色 */
/* 滚动条的头尾的颜色 */
::-webkit-scrollbar-button {
  background-color: none;
}

/* 滚动条的头尾的颜色 */
/* 滚动条的背景色 */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
  background-color: none !important;
  display: none;
}
</style>
