function json(status,data,msg){
  return {status,data,msg}
}
function error(data,msg){
  return json('error',data,msg)
}
function ok(data,msg){
  return json('ok',data,msg||'success')
}
module.exports = {
  json,
  error,
  ok
}