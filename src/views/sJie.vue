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
            <div>180</div>
            <div>平<br>脱<br>硫</div>
          </div>
          <div style="cursor: pointer" @click="ouileat('180平脱硫颗粒物','ybklw','32e73409s','8957a2ee','cb5bd1df')">
            <myecharts :arr="ybklw" :name="'颗粒物'" :id="'32e73409'" :fid="'8957a2ee'" :xid="'cb5bd1df'"
                       :utr="'180平脱硫'" :uar="'烧结'"></myecharts>
          </div>
          <div style="margin-left: 0.1vw;cursor: pointer" @click="ouileat('180平脱硫二氧化硫',ybwyhl,'fdc43cdbs','6185c2eds','d15e4cfds')">
            <myecharts :arr="ybwyhl" :name="'二氧化硫'" :id="'fdc43cdb'" :fid="'6185c2ed'" :xid="'d15e4cfd'"
                       :utr="'180平脱硫'" :uar="'烧结'"></myecharts>
          </div>
          <div style="margin-left: 0.1vw;cursor: pointer" @click="ouileat('180平脱硫氢氧化物',ybqyhw,'c802690es','7d3b1dfds','24687fads')">
            <myecharts :arr="ybqyhw" :name="'氢氧化物'" :id="'c802690e'" :fid="'7d3b1dfd'" :xid="'24687fad'"
                       :utr="'180平脱硫'" :uar="'烧结'"></myecharts>
          </div>
        </div>
        <!--        75-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>90</div>
            <div>平<br>脱<br>硫</div>
          </div>
          <div style="cursor: pointer" @click="ouileat('90平脱硫颗粒物',jsklw,'e05c4a76s','4b02b177s','b08353c3s')">
            <myecharts :arr="jsklw" :name="'颗粒物'" :id="'e05c4a76'" :fid="'4b02b177'" :xid="'b08353c3'"
                       :utr="'90平脱硫'" :uar="'烧结'"></myecharts>
          </div>
          <div style="margin-left: 0.1vw;cursor: pointer" @click="ouileat('90平脱硫二氧化硫',jswyhl,'e4bd819ds','a8b013f5s','c2bd03b3s')">
            <myecharts :arr="jswyhl" :name="'二氧化硫'" :id="'e4bd819d'" :fid="'a8b013f5'" :xid="'c2bd03b3'"
                       :utr="'90平脱硫'" :uar="'烧结'"></myecharts>
          </div>
          <div style="margin-left: 0.1vw;cursor: pointer" @click="ouileat('90平脱硫氢氧化物',jsqyhw,'c861462es','6053d7dds','07e77787s')">
            <myecharts :arr="jsqyhw" :name="'氢氧化物'" :id="'c861462e'" :fid="'6053d7dd'" :xid="'07e77787'"
                       :utr="'90平脱硫'" :uar="'烧结'" style="cursor: pointer"></myecharts>
          </div>
        </div>
        <!--      180平机-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>180</div>
            <div>平<br>机<br>尾 <br>除 <br>尘</div>
          </div>
          <div @click="ouileat('180平机尾除尘',ybjwcc,'49c25274s','b88825c9s','9404a7a3s')">
            <onyru :arr="ybjwcc" :name="'颗粒物'" :id="'49c25274'" :fid="'b88825c9'" :xid="'9404a7a3'"
                   :utr="'180平机尾除尘'" :uar="'烧结'" style="cursor: pointer"></onyru>
          </div>
        </div>
        <!--        1#90平机尾除尘-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>1#</div>
            <div>90</div>
            <div>平<br>机<br>尾 <br>除 <br>尘</div>
          </div>
          <div @click="ouileat('1#90平机尾除尘',jsjwcc,'9581d056s','6bd7e047s','6cbf8bffs')">
            <onyru :arr="jsjwcc" :name="'颗粒物'" :id="'9581d056'" :fid="'6bd7e047'" :xid="'6cbf8bff'"
                   :utr="'1#90平机尾除尘'" :uar="'烧结'" style="cursor: pointer"></onyru>
          </div>
        </div>
        <!--      2#90平机尾除尘-->
        <div class="tableTitlefir">
          <div class="tableTitlefirSpan">
            <div>2#</div>
            <div>90</div>
            <div>平<br>机<br>尾 <br>除 <br>尘</div>
          </div>
          <div @click="ouileat('2#90平机尾除尘',jsjwccer,'130038f2s','c8269a62s','130038f2s')">
            <onyru :arr="jsjwccer" :name="'颗粒物'" :id="'130038f2'" :fid="'c8269a62'" :xid="'130038f2'"
                   :utr="'2#90平机尾除尘'" :uar="'烧结'"></onyru>
          </div>
        </div>

      </div>
      <!--    组件-->
    </div>
    <div v-if="b==1" class="taui">
      <div class="cuileat">
        <div class="uaie" style="margin-left: 0.5vw;margin-top: 1vh">
          <div style="font-size: 1vw;color: #ffffff">标准维护</div>
          <div @click="b=2">❌</div>
        </div>
        <div style="margin-top: 2vh">
          <table class="table" style="width: 24vw;margin-left: 0.5vw;margin-top: 1vh">
            <thead>
            <tr>
              <td>工序</td>
              <td>烧结</td>
              <td>竖炉</td>
              <td>高炉</td>
              <td>转炉</td>
              <td>能源</td>
            </tr>
            </thead>
            <tbody style="height: 68.3vh">
            <tr v-for="(item,index) in 50" :key="index">
              <td>累计</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="pociuat">
          <div class="butals">取消</div>
          <div class="butals" style="margin-left: 0.5vw;background-color: #0058CE">确定</div>
        </div>
      </div>
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
import axios from "_axios@0.21.4@axios";
import cenechar from "@/components/cenechar.vue";

export default {
  props: ['b'],
  data() {
    return {
      //180
      ybklw: "",
      ybwyhl: "",
      ybqyhw: "",
      //90
      jsklw: "",
      jswyhl: "",
      jsqyhw: "",
      //180机尾除尘
      ybjwcc: "",
      jsjwcc: "",
      jsjwccer: "",
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
            case "颗粒物(180平脱硫)":
              this.ybklw = res.data[i].bz;
              break;
            case "二氧化碳(180平脱硫)":
              this.ybwyhl = res.data[i].bz;
              break;
            case "氮氧化物(180平脱硫)":
              this.ybqyhw = res.data[i].bz;
              break;
            case "颗粒物(90平脱硫)":
              this.jsklw = res.data[i].bz;
              break;
            case "二氧化碳(90平脱硫)":
              this.jswyhl = res.data[i].bz;
              break;
            case "氮氧化物(90平脱硫)":
              this.jsqyhw = res.data[i].bz;
              break;
            case "颗粒物(180平机尾除尘)":
              this.ybjwcc = res.data[i].bz;
              break;
            case "颗粒物(1#90平机尾除尘)":
              this.jsjwcc = res.data[i].bz;
              break;
            case "颗粒物(2#90平机尾除尘)":
              this.jsjwccer = res.data[i].bz;
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
/*区间背景*/
.qjbjcil {
  height: 3.5vh;
  background-color: #1d3466;
  border-radius: 0.2vw;
  display: flex;
  align-items: center;
  font-size: 0.5vw;
}

.oucine {
  width: 70vw;
  display: flex;
  justify-content: space-between;
  margin-left: 0.5vw;
  margin-top: 1vh;
}

.oacuies {
  background-color: #1E2D42;
  width: 71vw;
  height: 64.5vh;
}

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

.pociuat {
  display: flex;
  justify-content: flex-end;
  width: 24vw;
  margin-top: 1.5vh;
}

.butals {
  width: 3vw;
  height: 3vh;
  background-color: #666666;
  border-radius: 0.2vw;
  font-size: 0.6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.uaie {
  display: flex;
  justify-content: space-between;
  width: 24vw;
  height: 1.5vh;
}

.cuileat {
  background-color: #2A354B;
  width: 25vw;
  height: 82vh;
}

.taui {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
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


