var path = require('path');
var Friends = require('../data/friends.js');
module.exports = function(server){
    server.get('/api/friendslist', function(req, res){
        res.json(Friends);
    });

    server.post('/api/friendslist', function(req, res){
        console.log(req.body);
        var totalScore = 0;
        req.body.scores.forEach(function(score){
            totalScore += score;
        });



        console.log("New User Total Score is " + totalScore);
        Friends.push(req.body);
        res.send("You have been added");
    });
}