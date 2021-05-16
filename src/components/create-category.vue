<template>
  <div class="create-category">
    <el-button type="primary" @click="clickHandler">+</el-button>
  </div>
</template>
<style lang="scss" scoped>
  .create-category{
     position:absolute;
     bottom:0;
     right:1px;
     left:0;
     padding:6px;
     display:flex;
     justify-content:center;
     padding-bottom:20px;
     background-color:var(--primary-color);
    .el-button{
      font-size:20px;
    }
  }
</style>
<script>
  import {mapMutations} from 'vuex'
  export default {
    name:"createCategory",
    methods:{
      ...mapMutations({
        create:'sidebar/CREATE_CATEGORY'
      }),
      clickHandler(){
        this.create({isCreating:true})
      }
    }
  }
</script>