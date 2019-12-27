var express = require('express');
var eventRouter = express.Router();
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
    
]

eventRouter.route('/')
    .get(function(req, res){
        
        //MongoDB start
        // var url = 'mongodb://localhost:27017/eventsApp';
        // mongodb.connect(url, function(err, db){
        //     var collection = db.collection('events');
        //     collection.find({}).toArray(function(err, results){
        //         res.render('events', {
        //           list: ['first event', '2nd event', '3rd event'],
        //           nav: [
        //               {Link: 'Services', Text: 'Services'},
        //               {Link: 'Portfolio', Text: 'Portfolio'}, 
        //               {Link: 'About', Text: 'About'}, 
        //               {Link: 'Team', Text: 'Team'},
        //               {Link: 'Contact', Text: 'Contact'},
        //               {Link: 'Events', Text: 'Events'}
        //             ],
        //             events: results 
        //         });
                
        // });
        //MongoDB end
        
        res.render('events', {
       list: ['first event', '2nd event', '3rd event'],
       nav: [
           {Link: 'Services', Text: 'Services'},
           {Link: 'Portfolio', Text: 'Portfolio'}, 
           {Link: 'About', Text: 'About'}, 
           {Link: 'Team', Text: 'Team'},
           {Link: 'Contact', Text: 'Contact'},
           {Link: 'Events', Text: 'Events'}
        ],
        events: eventsData 
        
   });
});

eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        //res.send('Hello Single Events!');
        res.render('event', {
       list: ['first event', '2nd event', '3rd event'],
       nav: [
           {Link: 'Services', Text: 'Services'},
           {Link: 'Portfolio', Text: 'Portfolio'}, 
           {Link: 'About', Text: 'About'}, 
           {Link: 'Team', Text: 'Team'},
           {Link: 'Contact', Text: 'Contact'},
           {Link: 'Events', Text: 'Events'}
        ],
        events: eventsData[id] 
    });
});
    
module.exports = eventRouter;