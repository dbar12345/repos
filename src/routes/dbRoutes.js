var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [ 
        {
            name: 'Event 1',
            description: 'The first event',
            date: '2016.01.01',
            time: '1:00 PM',
            duration: '1 hour'
        },
        {
            name: 'Event 2',
            description: 'The second event',
            date: '2017.01.01',
            time: '2:00 PM',
            duration: '2 hour'
        },
        {
            name: 'Event 3',
            description: 'The third event',
            date: '2018.01.01',
            time: '3:00 PM',
            duration: '3 hour'
        }
    
];

dbRouter.route('/AddEventData')
    .get(function(req, res){
        //res.send('Successful Route Test!');
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, results){
                res.send(results);
                db.close();
            });
        });
});


module.exports = dbRouter;