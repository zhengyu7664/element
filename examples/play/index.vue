<!--
 * @Author: your name
 * @Date: 2020-12-04 10:40:03
 * @LastEditTime: 2020-12-07 14:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /element/examples/play/index.vue
-->
<template>
  <div style="margin: 20px;">
    <el-eu-button type="primary" @click="clickhandle">eu-button</el-eu-button>
    <el-eu-button type="danger" @click="clickhandle">eu-button</el-eu-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    },
    methods:{
      clickhandle(){
        console.log('test')
      }
    }
  };
</script>
