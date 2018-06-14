var express = require('express');
var router = express.Router();

const req = require('request-promise-native ');

const options = {
  uri: 'https://api.github.com/users/afoggs',
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  req(options).then(function(results) {
  console.log(results.name);
  res.render('index', { title: 'Week 3: PUG & Github', name: result.name, profile: results.profile });
});
});

module.exports = router;
