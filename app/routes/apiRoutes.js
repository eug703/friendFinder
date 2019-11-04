var friendData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        var userScore = req.body.score;
        var scoresArr = [];
        var bestMatch = 0;


        for (var i = 0; i < friendData.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendData[i].score[j]) - parseInt(userScore[j])))
                console.log(friendData[i].name + scoreDiff)
            }
            scoresArr.push(scoreDiff);
            
        }

        // loop through ours scoresArr
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
            console.log(bestMatch)
        }

        // return the best match
        var soulMate = friendData[bestMatch];
        res.json(soulMate);
        friendData.push(req.body)
        console.log(friendData);
        console.log(soulMate)

    });
}