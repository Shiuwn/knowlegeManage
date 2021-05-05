let CategoryDB = require('../model/category')
let util = require('../../utils')
CategoryDB.init();
module.exports = {
  getCategory: (req, res) => {
    CategoryDB.getAll('select * from category').then((data) => {
      res.send(util.ok(data));
    }, (e) => {
      res.send(util.error('error',null,'error result'));
      console.log(e)
    });
  },
  addCategory:(req,res)=>{
    var params = req.method=='POST'?req.body:req.query,sql,category;
    if(!params.name){ 
      res.send(util.error(null,'params is needed'))
      return
    }
    category = params.name.split(',');
    sql = 'insert into category values '
    sql += category.map(function(c){
      return '(NULL,"'+c+'")'
    }).join(',')
    CategoryDB.run(sql).then(function(data){
      if(!data){
        res.send(util.ok(null));
        return
      }
      throw new Error();
    }).catch(function(e){
      console.log(e)
      res.send(util.error(null,'adding category failed'))
    })
  }
}