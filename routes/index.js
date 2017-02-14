var express = require('express');
var router = express.Router();
var db = require('../mongoose/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SEditor', user: 'currentUser' });
});

router.get('/shortlink', function (req, res, next) {
  db.collections.findOne({ _id: req.query.shortlink }, function (err, result) {
    console.log(result + ' here is result');
    if (err) return next(err);

    if (result == undefined) {
      res.send({ code: 'not found' });
    };

    if (result != null) {
      res.send({ code: result.source });
    };
  });
  console.log(req.query.shortlink + ' hey');
  // res.send('found example with name ' + req.query.shortlink);
});

router.post('/save', function (req, res) {
  console.log(req.body.source + ' > ' + req.body.name);
  var coll = new db.collections({ name: req.body.name, source: req.body.source, owner: 'req.body.owner', shortlink: 'some' });
  db.Save(coll);
  res.send({ link: coll.id });
});

router.post('/login', function(req, res, next) {
  var inst = db.Snip({ name: req.body.cren });
  console.log(req.body.cren);
  db.Save(inst);
  res.send(JSON.stringify(req.body));
});

router.get('/all', function (req, res) {
  res.render('all')
});

router.get('/allget', function (req, res, next) {
  db.collections.find({ owner: req.query.keyword }, function (err, result) {
    if (err) return next(err);
    res.send({ status: 'looking for query -------', result: result })
  })
  // res.render('all')
});


module.exports = router;
