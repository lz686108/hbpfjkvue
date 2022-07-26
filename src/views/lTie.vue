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
        <!--  1#出铁场除尘  -->
        <div class="tableTitlefir" style="margin-top: 1vh">
          <div class="tableTitlefirSpan">
            <div>1#</div>
            <div>出<br>铁<br>场 <br>除 <br>尘</div>
          </div>
          <div @click="ouileat('1#出铁场除尘',yctc,'9832fe96s','39073792s','6effc401s')">
            <lTiecur :xid="'6effc401'" :arr="yctc" :name="'颗粒物'" :fid="'39073792'" :id="'9832fe96'"
                     :utr="'1#出铁场除尘'":uar="'炼铁'" style="cursor: pointer"></lTiecur>
          </div>
          <div class="tableTitlefirSpan">
            <div>2#</div>
            <div>出<br>铁<br>场 <br>除 <br>尘</div>
          </div>
          <div style="margin-left: 0.1vw" @click="ouileat('2#出铁场除尘',ectc,'9e4d2a96s','b2e1df9fs','1a4eb0fds')">
            <lTiecur :arr="ectc" :name="'二氧化硫'" :id="'9e4d2a96'" :fid="'b2e1df9f'" :xid="'1a4eb0fd'"
                     :utr="'2#出铁场除尘'":uar="'炼铁'" style="cursor: pointer"></lTiecur>
          </div>
          <div class="tableTitlefirSpan">
            <div>3#</div>
            <div>出<br>铁<br>场 <br>除 <br>尘</div>
          </div>
          <div style="margin-left: 0.1vw" @click="ouileat('3#出铁场除尘',sqyhw,'6c86bca4s','92b7d311s','6bf6530ds')">
            <lTiecur :arr="sqyhw" :name="'氢氧化物'" :id="'6c86bca4'" :fid="'92b7d311'" :xid="'6bf6530d'"
                     :utr="'3#出铁场除尘'":uar="'炼铁'" style="cursor: pointer"></lTiecur>
          </div>
        </div>
        <!--        2#出铁场除尘-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>4#</div>
            <div>出<br>铁<br>场 <br>除 <br>尘</div>
          </div>
          <div @click="ouileat('4#出铁场除尘',sctc,'32e73409s','1c6519b7s','115df746s')">
            <lTiecur :arr="sctc" :name="'颗粒物'" :id="'32e73409'" :fid="'1c6519b7'" :xid="'115df746'"
                     :utr="'4#出铁场除尘'":uar="'炼铁'" style="cursor: pointer"></lTiecur>
          </div>
          <div class="tableTitlefirSpan">
            <div>5#</div>
            <div>出<br>铁<br>场 <br>除 <br>尘</div>
          </div>
          <div style="margin-left: 0.1vw" @click="ouileat('5#出铁场除尘',wctc,'10919c70s','af7b19das','3fb1e003s')">
            <lTiecur :arr="wctc" :name="'二氧化硫'" :id="'10919c70'" :fid="'af7b19da'" :xid="'3fb1e003'"
                     :utr="'5#出铁场除尘'":uar="'炼铁'" style="cursor: pointer"></lTiecur>
          </div>
          <div class="tableTitlefirSpan">
            <div>1#</div>
            <div>矿<br>槽<br>除 <br>尘</div>
          </div>
          <div style="margin-left: 0.1vw" @click="ouileat('1#矿槽除尘',ycccc,'b2398ee8s','beedf90es','019252das')">
            <lTiecur :arr="ycccc" :name="'氢氧化物'" :id="'b2398ee8'" :fid="'beedf90e'" :xid="'019252da'"
                     :utr="'1#矿槽除尘'":uar="'炼铁'" style="cursor: pointer"></lTiecur>
          </div>
        </div>
        <!--              2#矿槽除尘-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>2#</div>
            <div>矿<br>槽<br>除 <br>尘</div>
          </div>
          <div @click="ouileat('2#矿槽除尘',ekccc,'e833e4b8s','ed608115s','451100cfs')">
            <onyru :arr="ekccc" :name="'颗粒物'" :id="'e833e4b8'" :fid="'ed608115'" :xid="'451100cf'"
                   :utr="'2#矿槽除尘'":uar="'炼铁'" style="cursor: pointer"></onyru>
          </div>
        </div>
        <!--                3#矿槽除尘-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>3#</div>
            <div>矿<br>槽<br>除 <br>尘</div>
          </div>
          <div @click="ouileat('3#矿槽除尘',skccc,'1f902394s','905cd7bas','37c82278s')">
            <onyru :arr="skccc" :name="'颗粒物'" :id="'1f902394'" :fid="'905cd7ba'" :xid="'37c82278'"
                   :utr="'3#矿槽除尘'":uar="'炼铁'" style="cursor: pointer"></onyru>
          </div>
        </div>
        <!--              2#90平机尾除尘-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>4#</div>
            <div>矿<br>槽<br>除 <br>尘</div>
          </div>
          <div @click="ouileat('4#矿槽除尘',skcci,'bc388e72s','c9e93ea2s','76283d0ds')">
            <onyru :arr="skcci" :name="'颗粒物'" :id="'bc388e72'" :fid="'c9e93ea2'" :xid="'76283d0d'":utr="'4#矿槽除尘'":uar="'炼铁'" style="cursor: pointer"></onyru>
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
                    :endTime="endTimes" style="cursor: pointer"></cenechar>
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
import axios from "_axios@0.21.4@axios";
import cenechar from "@/components/cenechar";

export default {
  data() {
    return {
      yctc: "",
      ectc: "",
      sqyhw: "",
      sctc: "",
      wctc: "",
      ycccc: "",
      ekccc: "",
      skccc: "",
      skcci: "",
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
            case "颗粒物(1#出铁场除尘)":
              this.yctc = res.data[i].bz;
              break;
            case "颗粒物(2#出铁场除尘)":
              this.ectc = res.data[i].bz;
              break;
            case "颗粒物(3#出铁场除尘)":
              this.sqyhw = res.data[i].bz;
              break;
            case "颗粒物(4#出铁场除尘)":
              this.sctc = res.data[i].bz;
              break;
            case "颗粒物(5#出铁场除尘)":
              this.wctc = res.data[i].bz;
              break;
            case "颗粒物(1#矿槽除尘)":
              this.ycccc = res.data[i].bz;
              break;
            case "颗粒物(2#矿槽除尘)":
              this.ekccc = res.data[i].bz;
              break;
            case "颗粒物(3#矿槽除尘)":
              this.skccc = res.data[i].bz;
              break;
            case "颗粒物(4#矿槽除尘)":
              this.skcci = res.data[i].bz;
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
  margin-top: 0.4vh;
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
