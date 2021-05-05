const sqlite3 = require('sqlite3');
const path = require('path');
var CategoryDB = {
  init:function(){
    try{
      this.db = new sqlite3.Database(path.resolve(__dirname,'../../data/knowlege.db'));
      this.db.run(`
        CREATE TABLE IF NOT EXISTS category (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE
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
    return new Promise((resolve, reject)=>{
      this.db.run(sql,params,(err)=>{
        if(err){
          reject(err)
          return
        }
        resolve(null)
      })
    })
  }
}
module.exports = CategoryDB;
