var Promise = require('promise');
const Experience = require("../model/experience");
var mongoose = require('mongoose');

// TODO 잘됨 
var asyncfunction = function (param) {
  return new Promise(function (resolved, rejected) {
    if (true) {
      resolved("결과");
    } else {
      rejected(Error(err));
    }
  });
}

module.exports = function (app) {
  // app.post('/m', function (req, res) {
  //   var test = new Experience();
  //   test.title = "test";
  //   test.sub_title = "test2";
  //   test.save(function (err) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     res.json({ result: 1 });
  //   });
  // });

  app.get('/', function (req, res) {
    Experience.find(function (err, books) {
      if (err) return res.status(500).send({ error: 'database failure' });
      console.log(books);
      var promise = asyncfunction(' terry ');
      promise.then(console.log, console.err); // 여기가 비동기 결과에 대한 콜백함
      // var result = async () => {
      //   var result2 = await Experience.find({});
      //   console.log(result2);
      //   return result2
      // };
      // console.log(result);
      res.render('index.html');
    })

    // var result = async () => {
    //   var result2 = await Experience.find({});
    //   console.log(result2);
    //   return result2
    // };
    // console.log(result);
    // book.published_date = new Date(req.body.published_date);


  });
}
