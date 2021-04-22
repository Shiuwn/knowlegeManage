<template>
 <div class="edit-wrapper">
   <div class="edit-input-wrapper">
      <el-tabs v-model="textType" type="card">
        <el-tab-pane label="富文本" name="richText"></el-tab-pane>
        <el-tab-pane label="Markdown" name="markdown"></el-tab-pane>
      </el-tabs>
   </div>
   <div class="edit-input-wrapper">
     <el-input v-model="article.title" placeholder="请输入标题"></el-input>
   </div>
   <div class="edit-input-wrapper">
    <ckeditor :editor="editor" v-model="article.content" v-if="textType=='richText'"></ckeditor>
    <markdown-editor v-model="article.content" v-else></markdown-editor>
   </div>
   <div class="edit-input-wrapper">
     <el-input type="textarea" :autosize="{minRows:2,maxRows:4}"
      placeholder="请输入概述"
      v-model="article.description"
     >
     </el-input>
   </div>
   <div class="edit-input-wrapper">
     <el-select placeholder="请选择分类" v-model="article.category">
      <el-option v-for="(item) in category" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
   </div>
   <div class="edit-input-wrapper">

   </div>
   <div class="edit-input-wrapper">
     <el-button type="primary" @click="save">保存</el-button>
     <el-button>取消</el-button>
   </div>
 </div> 
</template>
<script>
import Vue from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import MarkdownEditor from 'markdown-editor-vuejs';
import '../assets/css/font.css';
import 'markdown-editor-vuejs/src/markdown.css';
Vue.use( CKEditor );
export default {
  data(){
    return {
      textType:'richText',
      editor:ClassicEditor,
      editorData:'<p>这是可编辑的内容</p>',
      editorConfig:{},
      article:{
        title:'我是标题',
        content:'<p>这是可编辑的内容</p>',
        category:1,
        description:'我是描述',
        tags:[{
          name:'标签1',
          id:1
        }]
      },
      category:[{
        name:'HTML',
        id:1,
      },{
        name:'CSS',
        id:2,
      },{
        name:'JavaScript',
        id:3
      }]
    }
  },
  components:{MarkdownEditor},
  methods:{
    save(){
      console.log(this.article)
    },
    
  }
}
</script>
<style lang="scss" scoped>
  .edit-wrapper{
    padding:0 20px;
    z-index:1;
  }
  .edit-input-wrapper+.edit-input-wrapper{
    margin-top:20px;
  }
  /deep/.ck-content{
    min-height:600px;
  }
  /deep/.ck.ck-dropdown .ck-dropdown__arrow{
    z-index:0;
  }
  /deep/.ck.ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{
    top:60px;
  }
  /deep/.teal{
    background:var(--secondary-color);
    color:var(--third-color);
  }
  /deep/.el-tabs__header .el-tabs__nav{
    z-index:0;
  }

  /deep/.el-tabs__header .el-tabs__nav   .el-tabs__item.is-active,
  /deep/.el-tabs__item:hover{
    color:var(--third-color);
  }
  /deep/.markdown textarea{
    min-height:600px;
  }
  /deep/.el-button--primary,
  /deep/.el-button--primary:focus{
    background-color:var(--secondary-color);
    color:var(--third-color);
    border:none;
  }
  /deep/.el-button--primary:hover{
    background:rgb(195,221,205);
  }
</style>