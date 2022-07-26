<template>
  <div>
    <table class="xg_table-list">
      <tr>
        <th
          :style="'width:' + item['width']"
          v-for="(item, index) in dmthead"
          :key="index"
        >
          {{ item.name }}
        </th>
        <th style="width: 8%" v-if="dmupdate || dmdelete">操作</th>
      </tr>
    </table>
    <div class="xg_scroll" :style="'height:' + dmheight + 'vh'">
      <table>
        <tr v-for="(item, index) in obj" :key="index">
          <td
            @click="nihao(item, index, index1)"
            :style="
              'text-align:' + item1['text'] + ';' + 'width:' + item1['width']
            "
            v-for="(item1, index1) in dmthead"
            :key="index1"
          >
            {{ item[item1["key"]] }}
          </td>
          <td style="width: 8%; cursor: auto" v-if="dmupdate || dmdelete">
            <img
              @click="update(item)"
              v-if="dmupdate"
              style="width: 0.8vw; margin-right: 0.5vw; cursor: pointer"
              src="../assets/img_icon/bianji@2x.png"
              alt=""
            />
            <el-popconfirm
              v-if="dmdelete"
              @confirm="del(item)"
              icon-color="red"
              title="确定删除吗？"
            >
              <img
                slot="reference"
                style="width: 0.8vw; cursor: pointer"
                src="../assets/img_icon/shanchu1@2x.png"
                alt=""
              />
            </el-popconfirm>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: [],
    };
  },
  props: {
    dmheight: {
      type: String,
    },
    dmthead: {
      type: Array,
    },
    dmlist: {
      type: Array,
    },
    //是否开启修改按钮
    dmupdate: {
      type: Boolean,
    },
    //是否开启删除按钮
    dmdelete: {
      type: Boolean,
    },
  },
  watch: {
    dmlist: {
      handler(n, o) {
        this.obj = n;
      },
      deep: true, // 深度监听父组件传过来对象变化
    },
  },
  methods: {
    del(item) {
      this.$emit("dmclick", item, "删除");
    },
    update(item) {
      this.$emit("dmclick", item, "修改");
    },
    nihao(item, index, index1) {
      // console.log(index1);
      let heng = this.dmthead[index1].name;

      let list = this.dmlist[index][this.dmthead[index1].key];

      let obj = [
        {
          index: index,
          xyios: heng,
          data: list,
          obj: item,
        },
      ];
      this.$emit("dmclick", obj, "内容");
    },
  },
  components: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
td {
  cursor: pointer;
}
</style>