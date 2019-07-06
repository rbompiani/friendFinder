var friendData = require("../data/friends")

module.exports = function(app, path){
    app.get("/api/friends", function(req,res){
        return res.json(friendData.friends);
    });

    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
        var yourMatch = friendData.addFriend(newFriend);
        return res.json(yourMatch);
    });
}