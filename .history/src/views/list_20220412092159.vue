<template>
  <div class="max">
    <!-- 调用echarts -->
    <myecharts :id="'haha'" :arr="arr"> </myecharts>
    <myecharts :id="'gaga'"> </myecharts>
  </div>
</template>
<script>
// 引入组件
import myecharts from "@/components/myecharts.vue";
export default {
  data() {
    return {
      arr: [1, 1, 1, 1, 1, 1],
    };
  },
  // 注册

  methods: {
    // 前一天  当天 后一天方法

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
