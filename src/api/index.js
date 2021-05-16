const fetch = (url,param,data)=>{
  console.log(url);
  console.log(param);
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(data)
    },500);
  })
}
let categoryData = [{
    name:'HTML',
    id:1,
    class:'fa fa-html5 icon'
  },{
    name:"CSS",
    id:2,
    class:'fa fa-css3 icon'
  },{
    name:"JavaScript",
    id:3,
    class:'fa fa-code icon'
  }];
export const getCategory = (param)=>fetch('/api/category',param,categoryData)
export const addArticle = (param)=>fetch('/api/article',param)
