var Promise = require('promise');
var useCases = require("../model/useCases");

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
    useCases.findExperiences().then(function (ss) {
      // console.log(ss);
      res.render('index.html');
    }, function (err) { console.log(err); }); // 여기가 비동기 결과에 대한 콜백함


    // var promise = useCases.experiences("test");
    // promise.then(function (ss) {
    //   res.render('index.html');
    // }, function (err) { console.err }); // 여기가 비동기 결과에 대한 콜백함
  });
};

