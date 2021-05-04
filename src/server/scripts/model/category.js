const sqlite3 = require('sqlite3');
const fs = require('fs');
console.log(fs.existsSync('../../data/knowlege.db'))
var CategoryDB = {
  init:function(){
    try{
      this.db = new sqlite3.Database('../../data/knowlege.db');
      this.db.run(`
        CREATE TABLE IF NOT EXISTS category (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT
        )
      `)
    }catch(e){
      console.error('error create table category')
    }
  },
  getAll:function(sql,params){
    return new Promise((resolve, reject) =>{
      try{

        this.db.all(sql,params,function(err,rows){
          if(err) {
            reject(err)
            return
          }
          resolve(rows)
        });
      }catch(e){
        reject(e)
      }
    })
  },
  run:function(sql,params){
    this.db.run(sql,params)
  }
}
module.exports = CategoryDB;
