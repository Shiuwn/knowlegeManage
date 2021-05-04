let CategoryDB = require('../model/category')

CategoryDB.init();
module.exports = {
  getCategory: (req, res) => {
    CategoryDB.getAll('select * from category').then((data) => {
      res.send({ status: 200, data: data });
    }, (e) => {
      res.send({ status: 500, data: null });
      console.log(e)
    });
  }
}