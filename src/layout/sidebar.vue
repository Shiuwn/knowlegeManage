<template>
  <el-row>
    <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="rgb(69,137,148)"
      active-text-color="rgb(69,137,148)">
        <el-menu-item v-for="(item) in categorys" :key="item.id">
          <i :class="item.class||'fa fa-code icon'"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
        
    </el-menu>

  </el-col>
  </el-row>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('sidebar/FETCH_CATEGORY');
  },
  computed:{
    categorys(){
      return this.$store.state.sidebar.items
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-menu-item{
    font-size:18px;
    padding-left:30px;
  }
  .el-row,.el-col,.el-menu{
    height:100%;
  }
</style>