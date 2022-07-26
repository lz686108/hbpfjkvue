<template>
  <div class="max">
    <!-- 调用echarts -->
    <myheader> </myheader>
  </div>
</template>
<script>
// 引入组件
// import myecharts1 from "@/components/myecharts.vue";
import myheader from "@/components/header.vue";
export default {
  data() {
    return {};
  },
  // 注册

  components: {
    myheader,
  },
  methods: {
    // 前一天  当天 后一天方法

    async api() {
      // get post 请求接口实例
      const a = await this.$api.get_api("http://10.6.1.110/ce.php");
      const a1 = await this.$api.post_api("http://10.6.1.110/ce.php");
    },
  },
  components: {},
  created() {},
  mounted() {},
};
</script>


<style scoped>
</style>
