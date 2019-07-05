// create array of friends
var friends = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }];

  //add to friends array with survey results
  var addFriend = function(friend){
      friends.push(friend);
      console.log("added "+friend+" friend to the friends list");
  };

  //match your results with the best candidate in the friends array
  var findMatch = function(){
      console.log("finding a match");
  };

  //export values and functions to be used in other files
  module.exports = {
      friends: friends,
      addFriend: addFriend,
      findMatch: findMatch
  }
  