<template>
  <div class="max">
    <div class="cent">
      <div class="centLeft">
        <div class="centLeftL1">
          <div style="display: flex;align-items: center">异常监控</div>
          <div class="centLeftfour" style="margin-bottom: 0.2vh">
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
        <div class="tableTitlefir" style="margin-top: 1vh">
          <div class="tableTitlefirSpan">
            <div>1#</div>
            <div>转<br>炉<br>二 <br>次 <br>除 <br>尘</div>
          </div>
          <div @click="ouileat('1#转炉二次除尘',chy,'ac26d0d7s','1a39e8efs','767be7c1s')">
            <onyru :arr="chy" :name="'颗粒物'" :id="'ac26d0d7'" :fid="'1a39e8ef'" :xid="'767be7c1'"
                   :utr="'1#转炉二次除尘'":uar="'炼钢'" style="cursor: pointer"></onyru>
          </div>
        </div>
        <div class="tableTitlefir" style="margin-top: 0.5vh">
          <div class="tableTitlefirSpan">
            <div>2#</div>
            <div>转<br>炉<br>二 <br>次 <br>除 <br>尘</div>
          </div>
          <div style="margin-left: 0.1vw" @click="ouileat('2#转炉二次除尘',che,'4d0c0285s','20c077e9s','d9b5fc6fs')">
            <onyru :arr="che" :name="'颗粒物'" :id="'4d0c0285'" :fid="'20c077e9'" :xid="'d9b5fc6f'"
                   :utr="'2#转炉二次除尘'":uar="'炼钢'" style="cursor: pointer"></onyru>
          </div>
        </div>

      </div>

<!--  <cuicpe></cuicpe>-->
    </div>
    <div v-if="tiacel" class="iauie">
      <div class="oacuies">
        <div class="oucine">
          <div style="font-size: 1vw;color: #ffffff">{{ name1 }}</div>
          <div @click="tiacel=false" style="cursor: pointer">❌</div>
        </div>
        <div style="margin-top: 1vh;margin-left: 0.5vw">
          <dm_time_day @dmtime="ciea"></dm_time_day>
        </div>
        <div>
          <cenechar :arr="arr1" :name="name1" :id="id1" :fid="fid1" :xid="xid1" :titem="tated" :stateTime="stateTimes"
                    :endTime="endTimes"></cenechar>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
// 引入组件
import myecharts from "@/components/myecharts.vue";
import four from "@/components/four.vue";
import shJie from "@/components/shJie.vue";
import onyru from "@/components/onyru.vue";
import lTiecur from "@/components/lTiecur.vue";
import lGangcur from "@/components/lGangcur.vue";
import axios from "_axios@0.21.4@axios";
import cenechar from "@/components/cenechar";

export default {
  data() {
    return {
      chy: "",
      che: "",
      //弹窗
      tiacel: false,
      name1: "",
      arr1: "",
      id1: "",
      fid1: "",
      xid1: "",
      //日期
      tated: "",
      stateTimes: "",
      endTimes: "",
    };
  },
  // 注册

  methods: {
    ciea(e) {
      this.tated = e;
      console.log(this.tated, "t")
      this.stateTimes = this.tated + " " + "00:00:00";
      this.endTimes = this.tated + " " + "23:59:59";
    },
    async api() {
      // get post 请求接口实例
      const a = await this.$api.get_api("http://10.6.1.110/ce.php");
      const a1 = await this.$api.post_api("http://10.6.1.110/ce.php");
    },
    tedacil() {
      axios({
        method: "post",
        url: "http://10.6.1.179:40018/mpd/ylxjb/hbbz/selectHbbz",
        params: {},
      }).then((res) => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          switch (res.data[i].pfcs) {
            case "颗粒物(二次除尘1期除尘)":
              this.chy = res.data[i].bz;
              break;
            case "颗粒物(二次除尘2期除尘)":
              this.che = res.data[i].bz;
              break;
          }
        }
      });
    },
    ouileat(name, arr, id, fid, xid) {
      this.tiacel = true;
      this.name1 = name;
      this.arr1 = arr;
      this.id1 = id;
      this.fid1 = fid;
      this.xid1 = xid;
    }
  },
  components: {
    myecharts,
    four,
    shJie,
    onyru,
    lTiecur,
    lGangcur,
    cenechar,
  },
  created() {
  },
  mounted() {
    this.tedacil();
  },
};
</script>


<style scoped>
.iauie {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.oacuies {
  background-color: #1E2D42;
  width: 71vw;
  height: 64.5vh;
}

.oucine {
  width: 70vw;
  display: flex;
  justify-content: space-between;
  margin-left: 0.5vw;
  margin-top: 1vh;
}

.cent {
  width: 99.4vw;
  height: 91.5vh;
  margin-left: 0.3vw;
  display: flex;
  justify-content: space-between;
}

.centLeft {
  width: 78vw;
  height: 91.5vh;
  background-color: #2A354B;
}

.centRight {
  width: 20.9vw;
  height: 91.5vh;
  background-color: #2A354B;
}

.centLeftL1 {
  width: 78vw;
  height: 3vh;
  background-color: #091022;
  color: #ffffff;
  font-size: 0.8vw;
  display: flex;
  justify-content: space-between;
}

.centLeftfour {
  width: 16.5vw;
  display: flex;
  justify-content: space-between;
  font-size: 0.5vw;
  align-items: flex-end;
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

.tableTitlefir {
  width: 77vw;
  height: 17.1vh;
  background-color: #2A354B;
  margin-left: 0.5vw;
  display: flex;
  justify-content: start;
}

.tableTitlefirSpan {
  color: #ffffff;
  width: 1.6vw;
  font-size: 0.5vw;
  background-color: #192633;
  height: 16.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.1vw;
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
