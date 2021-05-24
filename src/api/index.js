import qs from 'qs'
function postData(url,param){
  return fetch(url,{
    body:JSON.stringify(param),
    method:'POST'
  }).then(response=>response.json())
}
function getData(url,param){
  url = param?url+'?'+qs.encode(param):url;
  console.log(url)
  return fetch(url,{
    method:'GET'
  }).then(response=>response.json())
}
export const getCategory = ()=>getData('/api/category')
export const addCategory = (param)=>postData('/api/addCategory',param)