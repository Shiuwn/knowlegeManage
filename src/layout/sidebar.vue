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
          <i :class="(item.className||'fa fa-code')+' icon'"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
        <el-menu-item v-if="isCreating">
          <el-input placeholder="请输入分类名称回车" clearable 
            v-model="newCategory"
          ></el-input>
          <br>
          <el-input placeholder="请输入类名回车" clearable 
            v-model="className"
          ></el-input>
          <br>
          <el-button type="primary" @click="confirm">确定</el-button>
          <el-button type="default" @click="blurHandler">取消</el-button>
        </el-menu-item>
    </el-menu>

  </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      newCategory:'',
      className:''
    }
  },
  created(){
    this.$store.dispatch('sidebar/FETCH_CATEGORY');
  },
  computed:{
    categorys(){
      return this.$store.state.sidebar.items
    },
    isCreating(){
      return this.$store.state.sidebar.isCreating
    }
    
  },
  methods:{
    blurHandler(){
      this.$store.commit('sidebar/CREATE_CATEGORY',{isCreating:false})
    },
    inputHandler(){
      // console.log(e)
      if(this.newCategory){
        this.$store.dispatch('sidebar/ADD_CATEGORY',{name:this.newCategory})

      }
    },
    confirm(){
      this.blurHandler();
      this.inputHandler();
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