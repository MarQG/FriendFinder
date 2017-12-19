var path = require('path');
var Friends = require('../data/friends.js');
module.exports = function(server){
    server.get('/api/friends', function(req, res){
        res.json(Friends);
    });

    server.post('/api/friends', function(req, res){
        var closestMatch;
        var oldDiff = 0;
        
        Friends.forEach(function(friend){
            var diff = 0;
            for(var i = 0; i < friend.scores.length; i++){
                if(parseInt(req.body.scores[i]) != parseInt(friend.scores[i])){  
                    diff += Math.abs(parseInt(req.body.scores[i]) + parseInt(friend.scores[i]));
                }
            }

            if(diff < oldDiff){
                closestMatch = friend;
                oldDiff = diff;
            } else if(oldDiff === 0){
                closestMatch = friend;
                oldDiff = diff;
            }
        });

        Friends.push(req.body);
        res.send(closestMatch);
    });
}