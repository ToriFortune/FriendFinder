
// Dependencies to be imported or exported

const friends = require ("../data/friends.js");
const path = require("path");


// Routes

module.exports = (app) => {

  // All possible friends
//   app.get("/api/friends", (req, res) => {
//     res.send(friends);
//   })
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  })

  // Post survery input
  app.post("/api/friends", (req, res,) => {
        // store user data
        const newUser = {
            name: req.body.name,
            photo: req.body.photo,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            scores: req.body.scores
        };

        //compare new user's scores to all existing users' scores
        //to determine the best match
    });
}   