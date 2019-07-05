// create array of friends
var friends = [
    {
        "name":"George",
        "photo":"https://en.wikipedia.org/wiki/George_Washington#/media/File:Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
        "scores":[5,1,4,4,5,1,2,5,4,1]
    },
    {
        "name":"Thomas",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg",
        "scores":[4,1,1,1,5,1,3,5,2,1]
    },
    {
        "name":"Teddy",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/President_Roosevelt_-_Pach_Bros.jpg/800px-President_Roosevelt_-_Pach_Bros.jpg",
        "scores":[1,1,4,1,5,1,2,1,4,5]
    }, 
    {
        "name":"John",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
        "scores":[5,5,4,5,5,1,5,5,4,5]
    }      
];

//add to friends array with survey results
var addFriend = function(friend){
    friend.scores = friend.scores.map(Number);
    findMatch(friend);
    friends.push(friend);
    console.log("added "+friend.name+" friend to the friends list");

};

//match your results with the best candidate in the friends array
var findMatch = function(friend){
    console.log("finding a match");
    var friendsDelta = [];
    var curClosest;
    var yourMatch;
    for (var i=0; i<friends.length; i++){
        var formDelta=[];
        for(var scoreIdx=0; scoreIdx<friends[i].scores.length; scoreIdx++){
            var questDelta = friend.scores[scoreIdx]-friends[i].scores[scoreIdx];
            formDelta.push(Math.abs(questDelta));
        }
        var formTotal = formDelta.reduce((total, amount) => total + amount);
        friendsDelta.push(formTotal);
        if(!curClosest || formTotal<curClosest) {
            curClosest = formTotal;
            yourMatch = friends[i];
        }
    }
    console.log("Here's how you scored among all the friends", friendsDelta);
    console.log("Your match is ", yourMatch.name);
};

  //export values and functions to be used in other files
  module.exports = {
      friends: friends,
      addFriend: addFriend,
      findMatch: findMatch
  }
  