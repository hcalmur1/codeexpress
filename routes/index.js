var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Este es mi primer programa con \n nodejs \ny\n Express' });
});

module.exports = router;
