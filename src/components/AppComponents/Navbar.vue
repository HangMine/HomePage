<template lang="html">
<div class="el-menu">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="/" class="undeline">个人首页</router-link></el-menu-item>
  <el-menu-item index="2"><router-link to="/Article" class="undeline">文章管理</router-link></el-menu-item>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</div>
</template>


<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style media="screen">
  .undeline{
    text-decoration: none;
  }
  /*.el-menu{
    height: 3rem;
  }*/
</style>
