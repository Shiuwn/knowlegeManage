<template>
 <div class="edit-wrapper">
   <div class="edit-input-wrapper">
     <el-input v-model="title" placeholder="请输入标题"></el-input>
   </div>
   <div class="edit-input-wrapper">
    <ckeditor :editor="editor" v-model="editorData" ></ckeditor>
   </div>
   <div class="edit-input-wrapper">
     <el-input type="textarea" :autosize="{minRows:2,maxRows:4}"
      placeholder="请输入概述"
      v-model="description"
     >
     </el-input>
   </div>
   <div class="edit-input-wrapper">
     <el-button type="primary">保存</el-button>
     <el-button>取消</el-button>
   </div>
 </div> 
</template>
<script>
import Vue from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use( CKEditor );
export default {
  data(){
    return {
      editor:ClassicEditor,
      editorData:'<p>这是可编辑的内容</p>',
      editorConfig:{},
      description:'',
      title:'我是标题'
    }
  }
}
</script>
<style lang="scss" scoped>
  .edit-wrapper{
    padding:0 20px;
    z-index:1;
  }
  .edit-input-wrapper{
    margin-bottom:20px;
  }
  /deep/.ck-content{
    min-height:600px;
  }
  /deep/.ck.ck-dropdown .ck-dropdown__arrow{
    z-index:0;
  }
</style>