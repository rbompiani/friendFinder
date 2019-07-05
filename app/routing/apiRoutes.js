var friendData = require("../data/friends")

module.exports = function(app, path){
    app.get("/api/friends", function(req,res){
        return res.json(friendData.friends);
    });

    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
        friendData.addFriend(newFriend);
    });
}