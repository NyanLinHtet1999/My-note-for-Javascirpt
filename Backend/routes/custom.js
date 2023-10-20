var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({
          id : 1,
        name : "Custom"
        });
});

router.get('/random.txt', function(req, res, next) {
      res.send('random text');
   });

router.get('/ab?cd', function(req, res, next) {
     res.send('ab?cd');
  });

router.get('/ab+cd', function(req, res, next) {
     res.send('ab+cd');
  });

  router.get('/Hello', function(req, res, next) {
    res.send('Hello');
 });
 router.get('/Helloworld', function(req, res, next) {
  res.send('Hello world');
});

module.exports = router;
