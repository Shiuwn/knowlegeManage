import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:()=>import('../components/article-list')
    },
    {
      path:'/article/:id',
      component:()=>import('../components/article')
    }
  ]
});
export default router