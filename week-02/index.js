// TODO: Read the contents of `README.md` before hacking on this file

// Require the file system
const fs = require('fs');
// Require the request-promise-native package
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


req(options)
  .then(function(profile){
    // TODO: Handle the returned JSON data and write it to a file called
    // `response.json` in your `week-two/` directory
    //display data for verification.
    console.log(profile)

    //Stringfy data

    profile =  JSON.stringify(profile, null, 2);

    //write data to response json file
    fs.writeFile('response.json', profile, (err) =>{
      if (err) {
        throw err
      }
      else {
        console.log("Your Profile has been saved")
      }
    }
  )
  })

  .catch(function(err) {
    console.log(err);
  });
