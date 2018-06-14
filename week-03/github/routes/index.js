var express = require('express');
var router = express.Router();
//variable for rpn
const rpn = require('request-promise-native');

//create function to call api
const options = {
  url:"https://api.github.com/users/afoggs",
  headers:  {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

/* GET home page. */
router.get('/', function(req, res, next) {
  rpn(options).then( function(results) {
    //data test
    console.log("Profile", results.profile);
    //render profile
    res.render('index', { title: 'My Github Profile', name: results.name, profile: results.profile, repos: results.public_repos, avatar: results.avatar_url, updated_at: Date(results.updated_at) });
  });
});

module.exports = router;
