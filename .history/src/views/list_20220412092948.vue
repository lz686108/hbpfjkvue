<template>
  <div class="max">
    <!-- 调用echarts -->
    <myecharts :id="'haha'" :arr="arr" :name="'颗粒物'" @utime="time1">
    </myecharts>
    <myecharts :id="'gaga'" :arr="arr1" :name="'二氧化碳'"> </myecharts>
  </div>
</template>
<script>
// 引入组件
import myecharts from "@/components/myecharts.vue";
export default {
  data() {
    return {
      arr: [1, 1, 1, 1, 1, 1],
      arr1: [100, 120, 115, 130, 100, 150],
    };
  },
  // 注册

  methods: {
    // 前一天  当天 后一天方法
    utime(params) {
      console.log(params);
    },
    async api() {
      // get post 请求接口实例
      const a = await this.$api.get_api("http://10.6.1.110/ce.php");
      const a1 = await this.$api.post_api("http://10.6.1.110/ce.php");
    },
  },
  components: {
    myecharts,
  },
  created() {},
  mounted() {},
};
</script>


<style scoped>
</style>
