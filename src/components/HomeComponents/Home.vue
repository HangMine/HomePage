<template>
  <div class="block">
    <el-carousel trigger="click" :height="abc + 'px'">
      <el-carousel-item v-for="item in dataimg" :key="item">
      <img :src="item.url">
    </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
// 切记：VUE组件里面的data必须是一个函数，返回一个对象，且VUE语法里记得要加空格！（包括注释！！）
export default {
  name: 'Home',
  data () {
    return {
      abc: window.innerHeight - 77,
      dataimg: [{url: '3.jpg'}, {url: ('2.jpg')}, {url: ('1.jpg')}]
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .aa{
    width: 600px;
    height: 600px;
  }
</style>
