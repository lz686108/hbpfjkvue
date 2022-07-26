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

        <!--        180-->
        <div class="tableTitlefir" style="margin-top: 1vh">
          <div class="tableTitlefirSpan">
            <div>50</div>
            <div>吨<br>锅<br>炉</div>
          </div>
          <div>
            <myecharts :arr="wglklw" :name="'颗粒物'" :id="'f61c28d3'" :fid="'6f830567'" :xid="'e16a7729'" :utr="'50吨锅炉'"
                       :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw">
            <myecharts :arr="wgleyht" :name="'二氧化硫'" :id="'f61c28d3'" :fid="'6f830567'" :xid="'e16a7729'" :utr="'50吨锅炉'"
                       :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw">
            <myecharts :id="'gaga2'" :arr="wgldyhw" :name="'氢氧化物'" :utr="'50吨锅炉'" :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
        </div>
        <!--        75-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>75</div>
            <div>吨<br>锅<br>炉</div>
          </div>
          <div>
            <myecharts :id="'gaga20'" :arr="qswklw" :name="'颗粒物'" :utr="'75吨锅炉'" :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw">
            <myecharts :id="'gaga21'" :arr="qsweyht" :name="'二氧化硫'" :utr="'75吨锅炉'" :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw">
            <myecharts :arr="qswdyhw" :name="'氢氧化物'" :id="'11bfbc0c'" :fid="'06a01d5d'" :xid="'cfc71273'" :utr="'75吨锅炉'"
                       :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
        </div>
        <!--      130-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>130</div>
            <div>吨<br>锅<br>炉</div>
          </div>
          <div @click="ouileat('130吨锅炉氢氧化物',ysklw,'7c82ff6cs','7c82ff6cs','6ce6b7d6s')">
            <myecharts :arr="ysklw" :name="'颗粒物'" :id="'7c82ff6c'" :fid="'7c82ff6c'" :xid="'6ce6b7d6'" :utr="'130吨锅炉'"
                       :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw">
            <myecharts :arr="yseyhl" :name="'二氧化硫'" :id="'62b810ee'" :fid="'62b810ee'" :xid="'0837381c'" :utr="'130吨锅炉'"
                       :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw" @click="ouileat('130吨锅炉氢氧化物',ysqyhw,'63df0072s','63df0072s','e1d022dds')">
            <myecharts :arr="ysqyhw" :name="'氢氧化物'" :id="'63df0072'" :fid="'63df0072'" :xid="'e1d022dd'" :utr="'130吨锅炉'"
                       :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
        </div>
        <!--    340-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>340</div>
            <div>吨<br>锅<br>炉</div>
          </div>
          <div>
            <myecharts :id="'gaga40'" :arr="sklw" :name="'颗粒物'" :utr="'340吨锅炉'" :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw">
            <myecharts :id="'gaga41'" :arr="seyhl" :name="'二氧化硫'" :utr="'340吨锅炉'" :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
          <div style="margin-left: 0.1vw">
            <myecharts :id="'gaga42'" :arr="sqyhw" :name="'氢氧化物'" :utr="'340吨锅炉'" :uar="'能源'" style="cursor: pointer"></myecharts>
          </div>
        </div>
        <!--    污水-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>污<br>水<br>处 <br>理 <br>厂</div>
          </div>
          <div>
            <four :arr="wshxxy" :name="'化学需氧'" :id="'329fb64f'" :fid="'4f793a0c'" :xid="'d7e07d1d'" :utr="'污水处理厂'"
                  :uar="'能源'" style="cursor: pointer"></four>
          </div>
          <div style="margin-left: 0.1vw">
            <four :id="'gaga51'" :arr="wszl" :name="'总磷'" :utr="'污水处理厂'" :uar="'能源'" style="cursor: pointer"></four>
          </div>
          <div style="margin-left: 0.1vw">
            <four :id="'gaga52'" :arr="wszd" :name="'总氮'" :utr="'污水处理厂'" :uar="'能源'" style="cursor: pointer"></four>
          </div>
          <div style="margin-left: 0.1vw">
            <four :id="'gaga53'" :arr="wsph" :name="'PH'" :utr="'污水处理厂'" :uar="'能源'" style="cursor: pointer"></four>
          </div>
          <div style="margin-left: 0.1vw" @click="ouileat('污水处理厂氨氮',wsad,'425604b5s','91e17b6cs','5fb28ca1s')">
            <four :arr="wsad" :name="'氨氮'" :id="'425604b5'" :fid="'91e17b6c'" :xid="'5fb28ca1'" :utr="'污水处理厂'"
                  :uar="'能源'" style="cursor: pointer"></four>
          </div>
        </div>

      </div>
<!--      <cuicpe></cuicpe>-->
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
import axios from "_axios@0.21.4@axios";
import cenechar from "@/components/cenechar";

export default {
  data() {
    return {
      wglklw: "",
      wgleyht: "",
      wgldyhw: "",
      qswklw: "",
      qsweyht: "",
      qswdyhw: "",
      ysklw: "",
      yseyhl: "",
      ysqyhw: "",
      sklw: "",
      seyhl: "",
      sqyhw: "",
      wshxxy: "",
      wszl: "",
      wszd: "",
      wsph: "",
      wsad: "",
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
            case "颗粒物(50吨锅炉)":
              this.wglklw = res.data[i].bz;
              break;
            case "二氧化碳(50吨锅炉)":
              this.wgleyht = res.data[i].bz;
              break;
            case "氮氧化物(50吨锅炉)":
              this.wgldyhw = res.data[i].bz;
              break;
            case "颗粒物(75吨锅炉)":
              this.qswklw = res.data[i].bz;
              break;
            case "二氧化碳(75吨锅炉)":
              this.qsweyht = res.data[i].bz;
              break;
            case "氮氧化物(75吨锅炉)":
              this.qswdyhw = res.data[i].bz;
              break;
            case "颗粒物(130吨锅炉)":
              this.ysklw = res.data[i].bz;
              break;
            case "二氧化碳(130吨锅炉)":
              this.yseyhl = res.data[i].bz;
              break;
            case "氮氧化物(130吨锅炉)":
              this.ysqyhw = res.data[i].bz;
              break;
            case "颗粒物(340吨锅炉)":
              this.sklw = res.data[i].bz;
              break;
            case "二氧化碳(340吨锅炉)":
              this.seyhl = res.data[i].bz;
              break;
            case "氮氧化物(340吨锅炉)":
              this.sqyhw = res.data[i].bz;
              break;
            case "化学需氧量(污水处理厂)":
              this.wshxxy = res.data[i].bz;
              break;
            case "总磷(污水处理厂)":
              this.wszl = res.data[i].bz;
              break;
            case "总氮(污水处理厂)":
              this.wszd = res.data[i].bz;
              break;
            case "PH(污水处理厂)":
              this.wsph = res.data[i].bz;
              break;
            case "氨氮(污水处理厂)":
              this.wsad = res.data[i].bz;
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
