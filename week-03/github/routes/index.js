var express = require('express');
var router = express.Router();
var request = require('request-promise-native ');

const options = {
  uri: 'https://api.github.com/users/afoggs'
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Week 3' });
});

module.exports = router;
