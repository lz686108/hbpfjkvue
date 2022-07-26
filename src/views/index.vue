<template>
  <div class="body">
    <myheader></myheader>
    <router-view></router-view>
    <div style="position: fixed;right: 0.5vw;top: 6vh">
      <cuicpe></cuicpe>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import myheader from "@/components/header.vue";
import myfooter from "@/components/footer.vue";
import cuicpe from "@/components/cuicpe";
export default {
  data() {
    return {
    };
  },
  // props: {
  //   event: {
  //     type: String,
  //   }
  // },
  methods: {
  },
  components: {
    myheader,
    myfooter,
    cuicpe
  },
  created() {},
  mounted() {},
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  background: #091022;
}
</style>
