<template>
  <div class="ArticleDetail">
    <div id="div1" style="text-align: left"></div>
    <button @click="getContent()">保存</button>
  </div>
</template>
<script>
import axios from "axios";
import { Loading } from "element-ui";
import E from "wangeditor";
export default {
  data() {
    return {
      editorContent: "",
      editor: null,
    };
  },
  methods: {
    getContent() {
      var json = this.editor.txt.getJSON(); // 获取 JSON 格式的内容
      var jsonStr = JSON.stringify(json);
      console.log(this.editorContent, "----------------------");
    },
    wang() {
      this.editor = new E("#div1");

      // this.editor.config.menus = [
      //   // 菜单配置（因为在最新版的wangeditor中不能让功能图标换行，可以视情况而定删除功能）

      //   "head", // 标题

      //   "bold", // 粗体

      //   "fontSize", // 字号

      //   "fontName", // 字体

      //   "italic", // 斜体

      //   "underline", // 下划线

      //   "strikeThrough", // 删除线

      //   "foreColor", // 文字颜色

      //   "link", // 插入链接

      //   "list", // 列表

      //   "justify", // 对齐方式

      //   "image", // 插入图片

      //   "table", // 表格

      //   "undo", // 撤销

      //   "redo", // 重复
      // ];

      this.editor.config.onchange = (html, a) => {
        // console.log(html,'----------------',a)
        this.editorContent = html;
      };
      this.editor.config.height = 500;

      this.editor.config.uploadFileName = "file";
      this.editor.config.uploadImgServer =
        "http://10.6.1.188:8888/dd/web/fdfs/upload";
      this.editor.config.uploadImgHooks = {
        // 图片上传并返回结果，但图片插入错误时触发
        fail: function (xhr, editor, result) {
          console.log(result.content[0], 123123);
        },
        success: function (xhr, editor, result) {
          // 图片上传并返回结果，图片插入成功之后触发
          console.log(result, "success");
        },
        customInsert: (insertImg, result, editor) => {
          // 图片上传成功，插入图片的回调
          //result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
          // console.log(result.data[0].url)
          //insertImg()为插入图片的函数
          //循环插入图片
          // for (let i = 0; i < 1; i++) {
          // console.log(result)
          console.log(result.content[0]);

          let url = result.content[0];

          url = url.replace("e.ai:8888", "web.fsxgt.cn:18889");

          insertImg(url);
          // }
        },
      };

      // const editor = new E("#div1");
      // // editor.customConfig.showLinkImg = false;
      // editor.customConfig.uploadImgServer =
      //   "http://10.6.1.188:8888/dd/web/fdfs/upload"; // 上传图片的接口地址
      // editor.customConfig.uploadFileName = "file"; // formdata中的name属性

      // editor.customConfig.uploadImgHooks = {
      //   // 图片上传并返回结果，但图片插入错误时触发
      //   fail: function (xhr, editor, result) {
      //     console.log(result);
      //   },
      //   success: function (xhr, editor, result) {
      //     // 图片上传并返回结果，图片插入成功之后触发
      //     console.log(result, "success");
      //   },
      // };
      this.editor.create();
    },
  },
  components: {},
  created() {},
  mounted() {
    this.wang();
  },
};
</script>
<style scoped>
</style>
