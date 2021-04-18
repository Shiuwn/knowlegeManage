<template>
  <ul class="article-list">
     <li v-for="(item) in articleList" :key="item.id">
       <h3 class="article-title">{{item.title}}</h3>
       <div class="content-wrapper">
         <div class="content-container">
          <img :src="item.image" v-if="item.image">
          <p class="article-description">{{item.description}}</p>
         </div>
         <div class="tag-container">
           <el-tag type="info" class="tag" v-for="(tag,i) in item.tags" :key="i">
             {{tag}}
           </el-tag>
         </div>
       </div>
     </li>
  </ul>
</template>
<script>
export default {
  data(){
    return {
      articleList:[
        {
          id:123,
          title:'我是标题',
          description:'我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容我我是内容',
          image:'../assets/logo.png',
          tags:['标签1','标签2']
        }
      ]
    }
  }
  
}
</script>
<style lang="scss" scoped>
  
  ul.article-list{
    padding:0 20px;
    color:#0b0b0b;
    margin:0;
    li{
      overflow:hidden;
      border-bottom:1px dashed #ddd;
      .article-title{
        margin:0;
        margin-bottom:10px;
      }
      .content-wrapper{
        .content-container{
          display:flex;
          justify-content: start;
          color:#ababab;
          img{
            height:60px;
            width:60px;
            margin-right:10px;
            object-fit: cover;
          }
          .article-description{
            display:-webkit-box;
            font-size:14px;
            line-height:1.5;
            height:46px;
            overflow:hidden;
            text-overflow:ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        } 
        .tag-container{
          min-height:36px;
          .tag{
            margin-right:10px;
            background:var(--primary-color);
          }
        }
      }
    }
  }
</style>