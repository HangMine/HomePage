<template>
<div class="ArticleMenu">
  <el-row class="tac">
    <el-col :span="5">
      <!-- <h5>自定义颜色</h5> -->
      <el-menu :style=" {height: abc + 'px'}" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" backgroundColor="#545c64" textColor="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">
              <router-link to="/Article/ArticleContent2" class="undeline">选项一</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view/>
  </el-row>

</div>
</template>

<script>
export default {
  data () {
    return {
      abc: window.innerHeight - 77
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.el-menu {
  text-align: left;
}

.tac {
  position: relative;
  bottom: 1px;
}

.undeline {
  text-decoration: none;
}
</style>
