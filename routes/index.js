var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'currentExampleName', user: 'currentUser' });
});

router.get('/shortlink', function (req, res) {
  console.log(req.query.shortlink + ' hey');
  res.send('found example with name ' + req.query.shortlink);
});

router.post('/save', function (req, res) {
  /* body... */
  console.log(req.body.source + ' > ' + req.body.name);
  res.send('ok');
});

module.exports = router;
