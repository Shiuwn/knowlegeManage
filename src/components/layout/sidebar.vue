<template>
  <el-row>
    <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="rgb(69,137,148)"
      active-text-color="rgb(69,137,148)">
      
        <el-menu-item>
          <i class="fa fa-html5 icon"></i>
          <span>HTML</span>
        </el-menu-item>
        <el-menu-item>
          <i class="fa fa-css3 icon"></i>
          <span>CSS</span>
        </el-menu-item>
        <el-menu-item>
          <i class="fa fa-code icon"></i>
          <span>JavaScript</span>
        </el-menu-item>
    </el-menu>

  </el-col>
  </el-row>
</template>

<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .el-menu-item{
    font-size:18px;
    padding-left:30px;
  }
</style>