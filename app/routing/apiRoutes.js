
// Dependencies to be imported or exported

const friends = require("../data/friends.js");
const path = require("path");


// Routes

module.exports = (app) => {

  // All possible friends
  //   app.get("/api/friends", (req, res) => {
  //     res.send(friends);
  //   })
  app.get("/api/friends", (req, res, err) => {
    res.json(friends);
  })

  // Post survery input
  app.post("/api/friends", (req, res, err ) => {
    // store user data
    const newUser = {
      name: req.body.name,
      photo: req.body.photo,
     scores: req.body.scores
    };
    //compare new user's scores to all existing users' scores
    //to determine the best match
  });
}

const bestMatch ={
  name:"",
  photo:"",
  diff: null,
}

for (var i=0; i<friends.length;){
  var currentUser =friends [i]
  var userDifference=0;
  for (var j=0; j<currentUser.scores.length; j++){userDifference+=Math.abs(parseInt(currentUser.scores[j]))
    
  }
  if (userDifference<bestMatch.diff){
    bestMatch.name=currentUser.name;
    bestMatch.photo=currentUser.photo;
    bestMatch.diff=currentUser.diff;
    console.log("FOUND: " + bestMatch)
    break;
  } else {
    console.log("Not a match.")
    bestMatch = "No match!"
  }
}

friends.push(newFriend);
res.json(bestMatch);


