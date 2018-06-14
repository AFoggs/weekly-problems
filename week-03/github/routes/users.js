var express = require('express');
var router = express.Router();

const req = require('request-promise-native');

const options = {
  // TODO: Create an object literal to hit your account on the GitHub API,
  // and pass any other information the API requires (you should not have
  // to authenticate for this, however)
  uri: 'https://api.github.com/users/afoggs',
  headers: {
      'User-Agent': 'Request-Promise'
  },
  json: true // Automatically parses the JSON string in the response
};


/* GET users listing. */
router.get('/', function(req, res, next) {
  req(options)
    .then( function(profile){
      // TODO: Handle the returned JSON data and write it to a file called
      // `response.json` in your `week-two/` directory
      //display data for verification.
      console.log(profile);
 res.render('index', { title: 'Github', name: results.name, avatar: results.avatar_url, repos: results.public_repos, updated_at: Date(results.updated_at) });
});
});

module.exports = router;
